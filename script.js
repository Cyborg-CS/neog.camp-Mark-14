const buyingPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector("#result-box");



function calculateProfitAndLoss(e){
  var costPrice = Number(buyingPrice.value);
  var numberOfStocks = Number(stockQuantity.value);
  var sellingPrice = Number(currentPrice.value);
  
  if(costPrice !== 0 && costPrice > 0){
     if(numberOfStocks !== 0 && numberOfStocks > 0){
         if(sellingPrice !== 0 && sellingPrice > 0){
            
           if(costPrice === sellingPrice){
             resultBox.innerText = "You neither made profit or loss :(";
           }else{ 
           
           if(costPrice < sellingPrice){
               var [profit, profitPercentage] = calculateProfit(costPrice, sellingPrice);
                var netProfit = profit * numberOfStocks;
                resultBox.innerText = `Wohoo ! you made some profit wolfy... your profit is ${netProfit} and  profit percentage is ${profitPercentage.toFixed(2)}%`;resultBox.style.color = "green";
            }else{
            
            var[loss, lossPercentage] = calculateLoss(costPrice, sellingPrice);
            var netLoss = loss * numberOfStocks;
            resultBox.innerText = `Whoops!! Your loss is ${netLoss} and loss percentage is ${lossPercentage.toFixed(2)}% :(`;
            resultBox.style.color = "red";
            }; 
           };

         }else{
           resultBox.innerText = "Input the current stock price. (Positive Number's Only)";
         }
     }else{
       resultBox.innerText = "Input how many stocks are there. (Positive Number's Only)";
     }
  }else{
    resultBox.innerText = "Input the initial price. (Positive Number's Only)";
  }
}

function calculateProfit(costPrice, sellingPrice){
   var profit = sellingPrice - costPrice;
   var  profitPercentage = (profit/costPrice)*100;

    return [profit, profitPercentage];
}

function calculateLoss(costPrice, sellingPrice){
    var loss = costPrice - sellingPrice;
   var  lossPercentage = (loss/costPrice)*100;

    return [loss, lossPercentage];
}


checkBtn.addEventListener('click', calculateProfitAndLoss);