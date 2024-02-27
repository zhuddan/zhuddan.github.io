```shell
│  useWeatherControl.ts
│  WeatherControl.ts
└─effect
        BaseEffect.ts
        FogEffect.ts
        index.ts
        RainEffect.ts
        SnowEffect.ts
```

基础特效

1. 基础特效抽象类(BaseEffect.ts)
```ts
import type { PostProcessStage, Viewer } from 'cesium';
import { Cartesian3 } from 'cesium';
const VISIBLE_DISTANCE = 80000;
export abstract class BaseEffect {
  position: number[];
  viewer: Viewer;
  effect: Nullable<PostProcessStage> = null;
  _visible = true;
  isDestroyed = false;
  isAdd = false;
  constructor(viewer: Viewer, position: number[]) {
    this.position = position;
    this.viewer = viewer;
    this.update();
  }


  get visible() {
    return this._visible;
  }


  set visible(_visible) {
    this._visible = _visible;
    if (this.effect) {
      this.effect.enabled = _visible;
      if (_visible && !this.isAdd) {
        this.isAdd = true;
        this.viewer.postProcessStages.add(this.effect);
      }
    }
  }
  abstract init(): void;
  // 特效
  abstract createEffect(): PostProcessStage;
  abstract createFragmentShader(): string;


  update() {
    if (this.isDestroyed) return;
    const position = Cartesian3.fromDegrees(this.position[0], this.position[1]);
    const distance = Cartesian3.distance(this.viewer.scene.camera.position, position);
    requestAnimationFrame(() => {
      this.update();
    });
    this.visible = distance <= VISIBLE_DISTANCE;
  }


  destroy() {
    if (!this.viewer || !this.effect) return;
    this.viewer.scene.postProcessStages.remove(this.effect);
    this.isDestroyed = true;
  }
}

```

2. 雨(RainEffect.ts)
```ts
import type { Viewer } from 'cesium';
import { PostProcessStage, defaultValue } from 'cesium';
import { createUuid } from '@/utils';
import { BaseEffect } from './BaseEffect';
interface RainEffectOption {
  tiltAngle: number;
  rainSize: number;
  rainSpeed: number;
}
export class RainEffect extends BaseEffect {
  tiltAngle: any;
  rainSpeed: any;
  rainSize: any;
  constructor(
    viewer: Viewer,
    position: number[],
    options: RainEffectOption = { tiltAngle: -0.6, rainSize: 0.3, rainSpeed: 60.0 },
  ) {
    super(viewer, position);
    this.tiltAngle = defaultValue(options.tiltAngle, -0.6);
    this.rainSize = defaultValue(options.rainSize, 0.3);
    this.rainSpeed = defaultValue(options.rainSpeed, 60.0);
    this.init();
  }


  init() {
    this.effect = this.createEffect();
  }


  createEffect(): PostProcessStage {
    return new PostProcessStage({
      name: createUuid(),
      fragmentShader: this.createFragmentShader(),
      uniforms: {
        tiltAngle: () => {
          return this.tiltAngle;
        },
        rainSize: () => {
          return this.rainSize;
        },
        rainSpeed: () => {
          return this.rainSpeed;
        },
      },
    });
  }


  createFragmentShader() {
    return `uniform sampler2D colorTexture;
          varying vec2 v_textureCoordinates;
          uniform float tiltAngle;
          uniform float rainSize;
          uniform float rainSpeed;
          float hash(float x) {
              return fract(sin(x * 133.3) * 13.13);
          }
          void main(void) {
              float time = czm_frameNumber / rainSpeed;
              vec2 resolution = czm_viewport.zw;
              vec2 uv = (gl_FragCoord.xy * 2. - resolution.xy) / min(resolution.x, resolution.y);
              vec3 c = vec3(.6, .7, .8);
              float a = tiltAngle;
              float si = sin(a), co = cos(a);
              uv *= mat2(co, -si, si, co);
              uv *= length(uv + vec2(0, 4.9)) * rainSize + 1.;
              float v = 1. - sin(hash(floor(uv.x * 100.)) * 2.);
              float b = clamp(abs(sin(20. * time * v + uv.y * (5. / (2. + v)))) - .95, 0., 1.) * 20.;
              c *= v * b;
              gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c, 1), .5);
          }
          `;
  }
}
```
 3. 雪(SnowEffect.ts)
```ts

import type { Viewer } from 'cesium';
import { PostProcessStage, defaultValue } from 'cesium';


import { createUuid } from '@/utils';


import { BaseEffect } from './BaseEffect';


interface SnowEffectOptions {
  snowSize: number;
  snowSpeed: number;
}
export class SnowEffect extends BaseEffect {
  snowSize: 0.02;
  snowSpeed: 60.0;
  constructor(
    viewer: Viewer,
    position: number[],
    options: SnowEffectOptions = { snowSize: 0.02, snowSpeed: 60.0 },
  ) {
    super(viewer, position);
    this.snowSize = defaultValue(options.snowSize, 0.02); // 最好小于0.02
    this.snowSpeed = defaultValue(options.snowSpeed, 60.0);
    this.init();
  }


  init() {
    this.effect = this.createEffect();
  }


  createEffect(): PostProcessStage {
    return new PostProcessStage({
      name: createUuid(),
      fragmentShader: this.createFragmentShader(),
      uniforms: {
        snowSize: () => {
          return this.snowSize;
        },
        snowSpeed: () => {
          return this.snowSpeed;
        },
      },
    });
  }


  createFragmentShader() {
    return `uniform sampler2D colorTexture;
          varying vec2 v_textureCoordinates;
          uniform float snowSpeed;
          uniform float snowSize;
          float snow(vec2 uv,float scale)
          {
              float time=czm_frameNumber/snowSpeed;
              float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;
              uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;
              uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;
              p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);
              k=smoothstep(0.,k,sin(f.x+f.y)*snowSize);
              return k*w;
          }
          void main(void){
              vec2 resolution=czm_viewport.zw;
              vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
              vec3 finalColor=vec3(0);
              //float c=smoothstep(1.,0.3,clamp(uv.y*.3+.8,0.,.75));
              float c=0.;
              c+=snow(uv,30.)*.0;
              c+=snow(uv,20.)*.0;
              c+=snow(uv,15.)*.0;
              c+=snow(uv,10.);
              c+=snow(uv,8.);
              c+=snow(uv,6.);
              c+=snow(uv,5.);
              finalColor=(vec3(c));
              gl_FragColor=mix(texture2D(colorTexture,v_textureCoordinates),vec4(finalColor,1),.5);
              }
              `;
  }
}
```
 4. 雾(FogEffect.ts)
```ts

import type { Viewer } from 'cesium';
import { Color, PostProcessStage, defaultValue } from 'cesium';


import { createUuid } from '@/utils';


import { BaseEffect } from './BaseEffect';
interface RainEffectOption {
  visibility: number;
  color: Color;
}
export class FogEffect extends BaseEffect {
  visibility: any;
  color: any;
  rainSize: any;
  constructor(
    viewer: Viewer,
    position: number[],
    options: RainEffectOption = { visibility: 0.2, color: new Color(0.8, 0.8, 0.8, 0.5) },
  ) {
    super(viewer, position);
    this.visibility = defaultValue(options.visibility, 0.2);
    this.color = defaultValue(options.color, new Color(0.8, 0.8, 0.8, 0.5));
    this.init();
  }


  init() {
    this.effect = this.createEffect();
  }


  createEffect(): PostProcessStage {
    return new PostProcessStage({
      name: createUuid(),
      fragmentShader: this.createFragmentShader(),
      uniforms: {
        visibility: () => {
          return this.visibility;
        },
        fogColor: () => {
          return this.color;
        },
      },
    });
  }


  createFragmentShader() {
    return `uniform sampler2D colorTexture;
    uniform sampler2D depthTexture;
    uniform float visibility;
    uniform vec4 fogColor;
    varying vec2 v_textureCoordinates; 
    void main(void) 
    { 
       vec4 origcolor = texture2D(colorTexture, v_textureCoordinates); 
       float depth = czm_readDepth(depthTexture, v_textureCoordinates); 
       vec4 depthcolor = texture2D(depthTexture, v_textureCoordinates); 
       float f = visibility * (depthcolor.r - 0.3) / 0.2; 
       if (f < 0.0) f = 0.0; 
       else if (f > 1.0) f = 1.0; 
       gl_FragColor = mix(origcolor, fogColor, f); 
    }`;
  }
}

```


天气控制类 WeatherControl.ts

```ts
import type Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import type { WeatherType } from '@/api/model/stationModel';
import type { BaseEffect } from './effect';
import { FogEffect, RainEffect, SnowEffect } from './effect';

export class WeatherControl {
  position: number[];
  _weather: WeatherType = 'sun';
  weatherEffect: Nullable<BaseEffect> = null;
  viewer: Viewer;
  isDestroyed = false;
  constructor(viewer: Viewer, position: number[], weather: WeatherType = 'sun') {
    this.viewer = viewer;
    this.position = position;
    this.weather = weather;
  }


  get weather() {
    return this._weather;
  }


  set weather(weather: WeatherType) {
    if (this._weather == weather) return;
    this._weather = weather;
    this.handleWeather();
  }


  handleWeather() {
    this.weatherEffect?.destroy();
    this.weatherEffect = null;
    if (this.isDestroyed) return;
    if (this.weather == 'rain') {
      this.weatherEffect = new RainEffect(this.viewer, this.position);
      return;
    }
    if (this.weather == 'snow') {
      this.weatherEffect = new SnowEffect(this.viewer, this.position);
      return;
    }
    if (this.weather == 'fog') {
      this.weatherEffect = new FogEffect(this.viewer, this.position);
      return;
    }
  }


  destroy() {
    if (this.weatherEffect)
      this.weatherEffect.destroy();
    this.isDestroyed = true;
  }
}

```


 useWeatherControl.ts


```ts
import type { Viewer } from 'cesium';
import { WeatherControl } from './WeatherControl';
import { useStationStore } from '@/store/modules/station';

export function useWeatherControl(viewer: Viewer) {
  const stationStore = useStationStore();
  const weatherEffect = computed(() => stationStore.weatherEffect);
  const stationCountry = computed(() => stationStore.stationCountry);
  const stationWeatherControl: Record<string, WeatherControl> = {};
  function update() {
    if (!weatherEffect.value) {
      Object.keys(stationWeatherControl).map(e => stationWeatherControl[e].destroy());
      return;
    }
    for (let index = 0; index < stationCountry.value.length; index++) {
      const { stationCode, active, stationLon, stationLat, weather } = stationCountry.value[index];
      if (active) {
        if (!stationWeatherControl[stationCode] || stationWeatherControl[stationCode].isDestroyed)
          stationWeatherControl[stationCode] = new WeatherControl(viewer, [stationLon, stationLat]);
        stationWeatherControl[stationCode].weather = weather || 'sun';
      }
      else {
        if (stationWeatherControl[stationCode])
          stationWeatherControl[stationCode].destroy();
      }
    }
  }
  watch([stationCountry, weatherEffect], update, { immediate: true, deep: true });
}

```