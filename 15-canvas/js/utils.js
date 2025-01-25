// 旋转角度转换, 角度转化为[-180, 180]
const rotateConvert = (rotate) => {
  if (rotate > 180) {
    return rotate - 360;
  } else if (rotate < -180) {
    return rotate + 180;
  }
  return rotate;
};

// 计算点point绕中心点centerPoint旋转某个角度后的坐标
const getPointAfterRotate = ({ point, centerPoint, rotate = 0 }) => {
  let nodeRotate = (rotate * Math.PI) / 180;
  return {
    x:
      (point.x - centerPoint.x) * Math.cos(nodeRotate) -
      (point.y - centerPoint.y) * Math.sin(nodeRotate) +
      centerPoint.x,
    y:
      (point.x - centerPoint.x) * Math.sin(nodeRotate) +
      (point.y - centerPoint.y) * Math.cos(nodeRotate) +
      centerPoint.y,
  };
};

// 已知左上角坐标求中心点坐标
const getCenterPoint = (point, width, height, rotate = 0) => {
  const cPoint = {
    x: point.x + width / 2,
    y: point.y + height / 2,
  };
  return getPointAfterRotate({
    point: cPoint,
    centerPoint: point,
    rotate,
  });
  const r = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
  const oringAngle = Math.atan(height / width);
  const tansAngle = (rotate * Math.PI) / 180 + oringAngle;
  return {
    x: parseFloat(point.x) + r * Math.cos(tansAngle),
    y: parseFloat(point.y) + r * Math.sin(tansAngle),
  };
};

// 已知中心点求左上角坐标
const getTLPoint = (point, width, height, rotate = 0) => {
  const tlPoint = {
    x: point.x - width / 2,
    y: point.y - height / 2,
  };
  return getPointAfterRotate({
    point: tlPoint,
    centerPoint: point,
    rotate,
  });
};

const getGroupRectSize = (nodes, relativeTo) => {
  let xArr = [], yArr = [];
  [].forEach.call(nodes, node => {
    const nodeRect = node.getClientRect({ relativeTo });
    xArr.push(nodeRect.x, nodeRect.x + nodeRect.width);
    yArr.push(nodeRect.y, nodeRect.y + nodeRect.height);
  });
  const minX = Math.min(...xArr);
  const maxX = Math.max(...xArr);
  const minY = Math.min(...yArr);
  const maxY = Math.max(...yArr);
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  }
}

// 矩阵相乘(不需要用，直接使用现成的transform.js提供的方法即可)
const matrixMuliply = (a, b) => {
  var c = new Array(a.length);
  for (var i = 0; i < a.length; i++) {
    c[i] = new Array(b[0].length);
    for (var j = 0; j < b[0].length; j++) {
      c[i][j] = 0;
      for (var k = 0; k < b.length; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return c;
}
