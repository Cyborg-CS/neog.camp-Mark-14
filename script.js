const buyingPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector("#result-box");



function calculateProfitAndLoss(e){
  var costPrice = buyingPrice.value;
  var numberOfStocks = stockQuantity.value;
  var sellingPrice = currentPrice.value;
  
  if(costPrice !== ''){
     if(numberOfStocks !== ''){
         if(sellingPrice !== ''){
            
            if(costPrice < sellingPrice){
               var [profit, profitPercentage] = calculateProfit(costPrice, sellingPrice);
                var netProfit = profit * numberOfStocks;
                resultBox.innerText = `Wohoo ! you made some profit wolfy... your profit is ${netProfit} and  profit percentage is ${profitPercentage.toFixed(2)}%`;resultBox.style.color = "green";
            }else{
            
            var[loss, lossPercentage] = calculateLoss(costPrice, sellingPrice);
            var netLoss = loss * numberOfStocks;
            resultBox.innerText = `Whoops!! Your loss is ${netLoss} and loss percentage is ${lossPercentage.toFixed(2)}% :(`
            resultBox.style.color = "red";
            } 

         }else{
           resultBox.innerText = "Input the current stock price.";
         }
     }else{
       resultBox.innerText = "Input how many stocks are there.";
     }
  }else{
    resultBox.innerText = "Input the initial price.";
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