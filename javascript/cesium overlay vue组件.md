```html

<script setup lang="ts">
import type { Viewer } from 'cesium';
import { Cartesian2, Cartesian3, SceneTransforms, defined } from 'cesium';
import { useViewerProviderContext } from '../../context/useViewerContext';
import { useTerrainHeight } from '../../hooks/core/useTerrainHeight';
import { useViewerReady } from '../../hooks/core/useViewerReady';
import type { VcPosition } from '../typings';
  type Theme = 'Cyberpunk' | 'Pure' | 'Dialog' | 'New';
  type OffsetType = [number, number];
const props = defineProps({
  position: {
    type: Object as PropType<VcPosition>,
    required: true,
  },
  offset: {
    type: Array as unknown as PropType<OffsetType>,
    default: () => [0, 0] as OffsetType,
  },
  theme: {
    type: String as PropType<Theme>,
    required: true,
  },
});
const emit = defineEmits(['close']);
defineOptions({
  name: 'VcOverlay',
});
const { position, terrainHeightReady } = useTerrainHeight(props);
const overlay = ref<ElRef>();
const style = reactive({
  left: '',
  bottom: '',
  transform: '',
});
const lastCanvasPosition = ref<Cartesian2>();
const { getViewer } = useViewerProviderContext();


const visible = ref(true);
function update() {
  const viewer = getViewer();


  if (!viewer) return;


  const scratch = new Cartesian2();
  // const canvasPosition = viewer!.scene.cartesianToCanvasCoordinates(position.value, scratch);


  const canvasPosition = SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position.value, scratch);
  const canvasHeight = viewer.scene.canvas.height;
  const distance = Cartesian3.distance(viewer.scene.camera.position, position.value);


  const hiddenWithDistance = distance <= 70 || distance >= 14000;


  if (defined(canvasPosition) && !Cartesian2.equals(lastCanvasPosition.value!, canvasPosition)) {
    const [x, y] = props.offset;
    style.left = `${scratch.x + x}px`;
    style.bottom = `${canvasHeight - scratch.y + y}px`;
    // if (overlay.value) {
    //   style.transform = ` translateY(calc(-50% - ${overlay.value?.clientHeight / 2}px))`;
    // }
    lastCanvasPosition.value = canvasPosition;
    const cameraPosition = viewer!.camera.position;
    const cartographicPosition = viewer!.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition);
    if (defined(cartographicPosition)) {
      let cameraHeight = cartographicPosition.height;
      cameraHeight += 1 * viewer!.scene.globe.ellipsoid.maximumRadius;
      if (
        Cartesian3.distance(cameraPosition, position.value) > cameraHeight
          || hiddenWithDistance
          || !terrainHeightReady.value
      )
        visible.value = true;
      else
        visible.value = true;
    }
  }
  else {
  }
}
useViewerReady((viewer: Viewer) => {
  viewer.scene.postRender.addEventListener(update);
});


function closeDialog() {
  emit('close');
}
</script>


<template>
  <div v-if="visible" ref="overlay" class="overlay" :style="style" :class="theme">
    <template v-if="theme === 'Cyberpunk'">
      <div class="wrap">
        <div class="area">
          <div class="arrow-lt"></div>
          <div class="b-t"></div>
          <div class="b-r"></div>
          <div class="b-b"></div>
          <div class="b-l"></div>
          <div class="arrow-rb"></div>
          <div class="label-wrap">
            <p class="title">
              <slot name="title"></slot>
            </p>
            <div class="label-content">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="b-t-l"></div>
        <div class="b-b-r"></div>
      </div>
      <div class="arrow"></div>
    </template>
    <template v-if="theme === 'New'">
      <div class="wrap">
        <div class="area">
          <slot></slot>
        </div>
      </div>
      <div class="arrow"></div>
    </template>
    <template v-if="theme === 'Pure'">
      <slot></slot>
      <div class="arrow"></div>
    </template>
    <template v-if="theme === 'Dialog'">
      <div class="dialog-inner">
        <slot></slot>
        <span class="close">
          <img src="@/assets/images/dialog_close.png" @click="closeDialog">
        </span>
      </div>


      <div class="arrow"></div>
    </template>
  </div>
</template>


<style scoped lang="scss">
  .overlay {
    position: absolute;
    z-index: 9;
    border-radius: 10px;
    white-space: nowrap
  }


  .overlay.Cyberpunk {
    .wrap {
      position: relative;
      padding: 30px;
      overflow: hidden;
    }


    .b-b,
    .b-b-r,
    .b-l,
    .b-r,
    .b-t,
    .b-t-l {
      /* background:  #29baf1; */
      background-color: #4984ed;
      /* box-shadow: 0 0 10px 2px #29baf1; */
      box-shadow: 0 0 10px 2px #4984ed;
    }


    .area {
      position: relative;
      min-width: 180px;
      min-height: 150px;
      background-image: linear-gradient(135deg, transparent 30px, #28bbf06c 30px, #28bbf06c, transparent),
        linear-gradient(-45deg, transparent 30px, #28bbf06c 30px, #28bbf06c, transparent);


      .b-t {
        position: absolute;
        top: 0;
        left: 44px;
        right: 0;
        height: 1px;
        z-index: 10;
      }


      .b-r {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 44px;
        width: 1px;
        z-index: 10;
      }


      .b-b {
        position: absolute;
        left: 0;
        right: 44px;
        bottom: 0;
        height: 1px;
        z-index: 10;
      }


      .b-l {
        position: absolute;
        top: 44px;
        left: 0;
        bottom: 0;
        width: 1px;
        z-index: 10;
      }


      .label-wrap {
        padding-left: 12px;
        color: #fff;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;


        .title {
          margin-top: 20px;
          padding: 0 12px 0 30px;
          height: 36px;
          line-height: 36px;
          position: relative;
          background-image: linear-gradient(135deg, transparent 25px, #4984ed 25px);
        }


        .label-content {
          > :deep(div) {
            padding: 4px 45px 4px 0;
          }
        }
      }
    }


    .b-t-l {
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 62px;
      transform: rotate(45deg) translate(52px, -22px);
      z-index: 10;
    }


    .b-b-r {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1px;
      height: 62px;
      transform: rotate(45deg) translate(-52px, 22px);
      z-index: 10;
    }


    .arrow {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 45px;
      height: 2px;
      transform: rotate(-45deg) translate(5px, -15px);
      background-color: #4984ed;
      opacity: 0.2;
    }
  }


  .overlay.Pure {
    box-sizing: border-box;
    padding: 20px;


    :deep(ul) {
      margin: 0;
      background: url('@/assets/images/overlay_bg2.png') no-repeat top center fixed;
      background-size: 100% 100%;
      padding: 10px 10px;
      // background-color: #6296f38c;


      h2{
        margin: 0;
        display: flex;
        align-items: center;
        font-size: 18px;
        background: url('@/assets/images/overlay_title.png') no-repeat top center;
      }


      li {
        font-size: 13px;
        list-style: none;
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
    }


    .arrow {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 37px;
      height: 2px;
      transform: rotate(-45deg) translate(5px, -15px);
      background-color: #4984ed;
      opacity: 0.6;
    }
  }


  .overlay.Dialog {
    box-sizing: border-box;
    padding: 20px;


    .dialog-inner {
      margin: 0;
      background: url('@/assets/images/dialog_bg.png') no-repeat top center;
      background-size: 100% 100%;
    }


    .close {
      position: absolute;
      top: 35px;
      right: 35px;
      cursor: pointer;
    }


    .arrow {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 37px;
      height: 2px;
      transform: rotate(-45deg) translate(7px, -14px);
      background-color: #4984ed;
      opacity: 0.6;
    }
  }


  .overlay.New {
    .wrap {
      position: relative;
      padding: 30px;
      overflow: hidden;
    }


    .area {
      padding: 10px;
      position: relative;
      background: url('@/assets/images/overlay_bgNew.png') no-repeat center center;
      background-size: 100% 100%;


    }


    .arrow {
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(30px * 1.414 + 2px);
      height: 2px;
      transform: rotate(-45deg) translateY(.5px);
      transform-origin: 0%;
      background-color: #37b2ea;
      opacity: 0.5;
    }
  }
</style>


 ```