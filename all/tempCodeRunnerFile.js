function sortBars(){
    let combined = xValues.map((x, i) => ({
        x: x,
        y: yValues[i],
        color: barColors[i]
      }));
      
      combined.sort((a, b) => b.y - a.y);
      
      xValues = combined.map(item => item.x);
      yValues = combined.map(item => item.y);
      barColors = combined.map(item => item.color);
      myChart.update();
      myChart2.update();    
}