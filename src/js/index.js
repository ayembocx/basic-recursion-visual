let e = 6;
console.log(`ES${e} is working`);

let start = () => {
    let rowLength = 10;
    let startPoint = 54;
    console.log(startPoint);
    const boxArr = Array.from(document.querySelectorAll('.box'));
  
  boxArr.forEach((el,ind) => {
    //el.textContent = Math.round(Math.random()).toString();
    
    let index = ind.toString();
    el.setAttribute('id','box-'+index);
  });
    document.getElementById(`box-${startPoint}`).textContent = 'X';
    document.getElementById(`box-${startPoint}`).style.backgroundColor = '#41e5f4';
    
  
  var newMatrix = arr2Matrix(boxArr,rowLength);
    
  document.querySelector('.start').addEventListener('click',() => {
    document.getElementById('box-'+startPoint).textContent = '1';
    swampSearch(newMatrix,startPoint);
  });
    
  }
    
  
  const arr2Matrix = (array,rowLength) => {
    var matrix = [], i, j;
   
    for(i = 0, j = -1; i < array.length;i++){
      
      if(i % rowLength === 0){
        j++;
        matrix[j] = [];
      }
      matrix[j].push(array[i]);
      
    }
    return matrix;
  }
  
  let swampSearch = (swamp,id) => {
      let call = 0;
    
      if((id<=9 && id >= 0) || (id>=90 && id< 100) || (id%10 === 0) || (id %10 === 9)){
      document.getElementById('box-'+id).style.backgroundColor = 'green';
      document.getElementById('box-'+id).textContent = 'O';
      console.log(id);
      return;
      }
    
    
    //left check
    
    if(document.getElementById('box-'+(id-1)).textContent.includes('1')){
      document.getElementById('box-'+(id-1)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id-1));
      document.getElementById('box-'+id).textContent = '1';
    }
    
    //right check
    
    if(document.getElementById('box-'+(id-11)).textContent.includes('1')){
      document.getElementById('box-'+(id-11)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id-11));
      document.getElementById('box-'+id).textContent = '1';
    }
    
    
    if(document.getElementById('box-'+(id-10)).textContent.includes('1')){
      document.getElementById('box-'+(id-10)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id-10));
      document.getElementById('box-'+id).textContent = '1';
    }
   
   
    if(document.getElementById('box-'+(id-9)).textContent.includes('1')){
      document.getElementById('box-'+(id-9)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id-9));
      document.getElementById('box-'+id).textContent = '1';
    }
    
    
    
    if(document.getElementById('box-'+(id+1)).textContent.includes('1')){
      document.getElementById('box-'+(id+1)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id+1));
      document.getElementById('box-'+id).textContent = '1';
    }
    
    
    if(document.getElementById('box-'+(id+11)).textContent.includes('1')){
     document.getElementById('box-'+(id+11)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id+11));
      document.getElementById('box-'+id).textContent = '1';
    }
    
    
    if(document.getElementById('box-'+(id+10)).textContent.includes('1')){
      document.getElementById('box-'+(id+10)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id+10));
      document.getElementById('box-'+id).textContent = '1';
    }  
    
    
    if(document.getElementById('box-'+(id+9)).textContent.includes('1')){
      document.getElementById('box-'+(id+9)).style.backgroundColor='orange';
      document.getElementById('box-'+id).textContent = 'x';
      call++;
      swampSearch(swamp,(id+9));
      document.getElementById('box-'+id).textContent = '1';
    }
    if(call === 0)
        document.getElementById('box-'+id).style.backgroundColor = 'red';
    return;
  }
  
  
  start();