#Hooks
- useState() : Quản lý trạng thái dữ liệu
- useReducer() : Quản lý trạng thái dữ liệu
  1. init state
  2. actions
  3. reducer
  4. dispatch


- uesEffect()
 1. uesEffect(callback)
 - callback luôn được gọi khi component mounted(render/re-render)
 2. uesEffect(callback, [])

 - Chỉ gọi duy nhất 1 lần khi component mounted(render)

 3. uesEffect(callback, [dependencies])
 - callback luôn được gọi khi component mounted(render)
 - callback được gọi khi dependencies thay đổi

uesEffect()
1) Cập nhật lại state
2) Cập nhật DOM
3) Render/Re-render IU
4) Gọi cleanup nếu dependencies thay đổi
5) Gọi uesEffect callback

useLayoutEffect()
1) Cập nhật lại state
2) Cập nhật DOM
4) Gọi cleanup nếu dependencies thay đổi (sync)
5) Gọi useLayoutEffect callback (sync)
3) Render/Re-render IU