This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## how to use

api 列表

```jsx
<RecycledList
  itemFn={NumFn}
  attrList={numberList}
  itemHeight={120}
  rowOffset={10}
  className={"CustomContainer"}
  deleteHooks={clickHander}
  scrollHander={scrollHander}
/>
```
- itemFn: 列表项展示组件 会像其中传递attrList
- attrList:列表展示的数据
- itemHeight 
- rowOffset 样式属性
- scrollHander：滚动处理函数