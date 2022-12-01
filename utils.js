function matrixProduct(mat1, mat2){
     let mat = [];
     for(let i = 0; i < mat1.length; i++){
          mat[i] = [];
          for(let n = 0; n < mat2[0].length; n++){
               let prod = 0;
               for(let m = 0; m < mat1[0].length; m++){
                    prod += mat1[i][m] * mat2[m][n];
               }
               mat[i][n] = prod;
          }
     }
     return mat;
}
function sumOfMatrices(mat1,mat2){
     let mat = [];
     for(let i = 0; i < mat1.length; i++){
          mat[i] = [];
          for(let n = 0; n < mat1[i].length; n++){
               let sum = 0;
               sum += mat1[i][n] + mat2[i][n];
               mat[i][n] = sum;
          }
     }
     return mat;
}

function sumOfArray(array){
     let res = 0;
     let arr = [];

     for(let i = 0; i < array.length; i++){
          res += array[i];
     }
     arr.push(res);
     return arr;
}

function sumOfEachRow(matrix){
     let mat = [];
     for(let i = 0; i < matrix.length; i++){
          mat.push(sumOfArray(matrix[i]));
     }
     return mat;   
}

function trim(string){
     let Trim = false;
     let finalword = "";
     for(let i = 0; i < string.length; i++){
          if(string[i] !== " "){
               Trim = true;
          }
          if(Trim){
               finalword = finalword.concat(string[i]);
          }
     }
     return finalword;
}

function countWords(str) {
     return str.trim().split(/\s+/).length;
}



module.exports = {
     matrixProduct,
     sumOfMatrices,
     sumOfArray,
     sumOfEachRow,
     trim,
     countWords
}