::: danger
原则：不推荐 `then` 和 `await` 一起使用
:::

例子

```js{24-65}
for (let i = 0; i < _data.length; i++) {
  try {
    await this.sleep(1000);
    const query = {
      ...this.form,
      order_id: _data[i].order_id,
      inspect_org_name: _inspect_org_name ? _inspect_org_name : "",
      warehouse_addr: _warehouse_addr ? _warehouse_addr : "",
      delivery_name: _delivery_name ? _delivery_name : "",
      backup_delivery_name: _backup_delivery_name ? _backup_delivery_name : "",
      express_insure: this.form.express_insure ? true : false,
      backup_express_insure: this.form.backup_express_insure ? true : false,
      delivery_product_name: _delivery_product_name,
      backup_delivery_product_name: _backup_delivery_product_name,
      delivery_insure_name: _delivery_insure_name,
      backup_delivery_insure_name: _backup_delivery_insure_name,
      express_insure_amount: this.isBatch
        ? _data[i].total_amount
        : this.form.express_insure_amount,
      backup_express_insure_amount: this.isBatch
        ? _data[i].total_amount
        : this.form.backup_express_insure_amount,
    };
    await submitQic(query)
      .then((res) => {
        if (res.code == 0) {
          if (this.form.isCache) {
            localStorage.setItem(
              "quality_inspection_info",
              JSON.stringify({
                ...this.form,
                delivery_insure_id: "",
                express_insure_amount: "",
                backup_delivery_insure_id: "",
                backup_express_insure_amount: "",
              })
            );
          } else {
            localStorage.setItem("quality_inspection_info", JSON.stringify({}));
          }
          if (i == _data.length - 1) {
            this.$message.success(res.message || "操作成功");
          }
          if (res.data) {
            this.$emit("printCode", res.data, this.form.printer);
          } else {
            if (i == _data.length - 1) {
              this.$message.error("暂无数据！");
            }
          }
          this.$nextTick(() => {
            setTimeout(() => {
              if (i == _data.length - 1) this.$emit("fetchList");
            }, 2000);
          });
        } else {
          if (i == _data.length - 1) {
            this.$message.error(res.message || "未知错误");
          }
        }
      })
      .finally(() => {
        this.loading = false;
      });
  } catch {}
}
```

> 上文中的 `await submitQic(query)` 结果应该不使用 `.then`, 而是从 `await submitQic(query)`中直接得到

```js{1}
const res = await submitQic(query);
if (res.code == 0) {
  if (this.form.isCache) {
    localStorage.setItem(
      "quality_inspection_info",
      JSON.stringify({
        ...this.form,
        delivery_insure_id: "",
        express_insure_amount: "",
        backup_delivery_insure_id: "",
        backup_express_insure_amount: "",
      })
    );
  } else {
    localStorage.setItem("quality_inspection_info", JSON.stringify({}));
  }
  if (i == _data.length - 1) {
    this.$message.success(res.message || "操作成功");
  }
  if (res.data) {
    this.$emit("printCode", res.data, this.form.printer);
  } else {
    if (i == _data.length - 1) {
      this.$message.error("暂无数据！");
    }
  }
  this.$nextTick(() => {
    setTimeout(() => {
      if (i == _data.length - 1) this.$emit("fetchList");
    }, 2000);
  });
} else {
  if (i == _data.length - 1) {
    this.$message.error(res.message || "未知错误");
  }
}
```

> 上述代码中还需要 `try catch finally`

```js{40-42}
try {
  const res = await submitQic(query);
  if (res.code == 0) {
    if (this.form.isCache) {
      localStorage.setItem(
        "quality_inspection_info",
        JSON.stringify({
          ...this.form,
          delivery_insure_id: "",
          express_insure_amount: "",
          backup_delivery_insure_id: "",
          backup_express_insure_amount: "",
        })
      );
    } else {
      localStorage.setItem("quality_inspection_info", JSON.stringify({}));
    }
    if (i == _data.length - 1) {
      this.$message.success(res.message || "操作成功");
    }
    if (res.data) {
      this.$emit("printCode", res.data, this.form.printer);
    } else {
      if (i == _data.length - 1) {
        this.$message.error("暂无数据！");
      }
    }
    this.$nextTick(() => {
      setTimeout(() => {
        if (i == _data.length - 1) this.$emit("fetchList");
      }, 2000);
    });
  } else {
    if (i == _data.length - 1) {
      this.$message.error(res.message || "未知错误");
    }
  }
} catch (e) {
  //
} finally {
   this.loading = false;
}
```

> 最终效果应该是

```js
for (let i = 0; i < _data.length; i++) {
  // sleep 是不可能出错的 不必包含在 try catch 中
  await this.sleep(1000);
  try {
    const res = await submitQic(query);
    if (res.code == 0) {
      if (this.form.isCache) {
        localStorage.setItem(
          "quality_inspection_info",
          JSON.stringify({
            ...this.form,
            delivery_insure_id: "",
            express_insure_amount: "",
            backup_delivery_insure_id: "",
            backup_express_insure_amount: "",
          })
        );
      } else {
        localStorage.setItem("quality_inspection_info", JSON.stringify({}));
      }
      if (i == _data.length - 1) {
        this.$message.success(res.message || "操作成功");
      }
      if (res.data) {
        this.$emit("printCode", res.data, this.form.printer);
      } else {
        if (i == _data.length - 1) {
          this.$message.error("暂无数据！");
        }
      }
      this.$nextTick(() => {
        setTimeout(() => {
          if (i == _data.length - 1) this.$emit("fetchList");
        }, 2000);
      });
    } else {
      if (i == _data.length - 1) {
        this.$message.error(res.message || "未知错误");
      }
    }
  } catch (e) {
    //
  } finally {
    this.loading = false;
  }
}
```

::: tip
另一种方式
使用 `then`
:::

```js
for (let i = 0; i < _data.length; i++) {
  // sleep 是不可能出错的 不必包含在 try catch 中
  await this.sleep(1000)
  .then(res=>{
    const res = await submitQic(query);
    return res
  }).then(res=>{
     if (res.code == 0) {
      if (this.form.isCache) {
        localStorage.setItem(
          "quality_inspection_info",
          JSON.stringify({
            ...this.form,
            delivery_insure_id: "",
            express_insure_amount: "",
            backup_delivery_insure_id: "",
            backup_express_insure_amount: "",
          })
        );
      } else {
        localStorage.setItem("quality_inspection_info", JSON.stringify({}));
      }
      if (i == _data.length - 1) {
        this.$message.success(res.message || "操作成功");
      }
      if (res.data) {
        this.$emit("printCode", res.data, this.form.printer);
      } else {
        if (i == _data.length - 1) {
          this.$message.error("暂无数据！");
        }
      }
      this.$nextTick(() => {
        setTimeout(() => {
          if (i == _data.length - 1) this.$emit("fetchList");
        }, 2000);
      });
    } else {
      if (i == _data.length - 1) {
        this.$message.error(res.message || "未知错误");
      }
    }
  }).catch((e){
    //
  }).finally(()=>{
    this.loading = false;
  })
}

```


> 上面代码中还是在 `await this.sleep(1000)` 中使用了 `await`, 主要目的是为了卡住`for 循环`，这和 "不推荐 `then` 和 `await` 一起使用" 的初衷相违背了，最好的做法应该把他提出来：


```js
/**
 * 此时 handleLoop 是个返回值为 promise 函数
 */
function handleLoop() {
 return this.sleep(1000)
  .then(res=>{
    const res = await submitQic(query);
    return res
  }).then(res=>{
     if (res.code == 0) {
      if (this.form.isCache) {
        localStorage.setItem(
          "quality_inspection_info",
          JSON.stringify({
            ...this.form,
            delivery_insure_id: "",
            express_insure_amount: "",
            backup_delivery_insure_id: "",
            backup_express_insure_amount: "",
          })
        );
      } else {
        localStorage.setItem("quality_inspection_info", JSON.stringify({}));
      }
      if (i == _data.length - 1) {
        this.$message.success(res.message || "操作成功");
      }
      if (res.data) {
        this.$emit("printCode", res.data, this.form.printer);
      } else {
        if (i == _data.length - 1) {
          this.$message.error("暂无数据！");
        }
      }
      this.$nextTick(() => {
        setTimeout(() => {
          if (i == _data.length - 1) this.$emit("fetchList");
        }, 2000);
      });
    } else {
      if (i == _data.length - 1) {
        this.$message.error(res.message || "未知错误");
      }
    }
  }).catch((e){
    //
  }).finally(()=>{
    this.loading = false;
  })
}

for (let i = 0; i < _data.length; i++) {
  await handleLoop()
}
```