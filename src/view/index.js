import React from "react";
import RecycledList from '../components/recycleView';
import NumRow from './NumRow'
import "./index.css";
const numberList = [];
function debounce(fn, wait) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments); // 把参数传进去
    }, wait);
  };
}
function handleScroll(e){
    // 处理滚动的函数，可以是分页加载等操作,防抖
    // numberList=numberList.concat(myApi.get("./XXX"))
    
}

function handleClickX(i){
    //...
    numberList.splice(i,1)
}

for (let i = 1; i <= 20000; i++) numberList.push(i);

function Demo() {
  return (
    <div>
      <div className="Split Right">
        <p>
          <b>Recycled List of {numberList.length} Sheep</b>
        </p>
        <RecycledList itemFn={NumRow} attrList={numberList} itemHeight={30} ScrollHander={handleScroll} deleteHooks={handleClickX}/>
      </div>
    </div>
  );
}

export default React.memo(Demo)
