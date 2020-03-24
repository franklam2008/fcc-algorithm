function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var newchange = [];
  var cidtotal = 0;
  var names = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
  var cidvalues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  var ans = { status: "OPEN", change:[['PENNY', 0],['NICKEL', 0], ['DIME', 0],['QUARTER', 0],['ONE', 0],
  ['FIVE', 0],['TEN', 0],['TWENTY', 0],['ONE HUNDRED', 0]]};
  // cid cash total
  for (var j = 0; j < 9; j++) {
    cidtotal += cid[j][1];
  };
  //check if cid has enough cash
  if (cidtotal < change) {
    ans["status"] = "INSUFFICIENT_FUNDS";
    ans["change"] = [];
    return ans;
  }else if(cidtotal ===change){
    ans["status"] = "CLOSED";
  };
  // process change from cid
  for (var i = 8; i >= 0; i--) {
    while (change >= cidvalues[i] && cid[i][1] !== 0) {
      newchange.push(names[i]);
      change -= cidvalues[i];
      cid[i][1] -= cidvalues[i];
      ans['change'][i][1] += cidvalues[i];
    };
  };
  // fixing penny bug
  if (change !== 0 && change < 0.05) {
    newchange.push(names[0]);
    change = 0;
    cid[0][1] = 0;
    ans['change'][0][1] += 0.01;
    ans['change'][0][1] = Math.round(ans['change'][0][1] * 100) / 100;
  };
  // status closed for cid 0 and complete change
  for (var k=8;k>=0;k--) {
    if(ans['change'][k][1]===0&&ans["status"] !== "CLOSED"){
      ans['change'].splice(k,1);
    };
  };
  // status for fail change
  if (change!==0) {
    ans["status"] = "INSUFFICIENT_FUNDS";
    ans["change"] = [];The system cannot find the file specified.
    return ans;
  };
  if(ans["status"] !== "CLOSED"){
    ans["change"].reverse();
  };
  return ans;
};
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//ans --{status: "OPEN", change: [["QUARTER", 0.5]]}

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// ans  {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// ans  {status: "INSUFFICIENT_FUNDS", change: []}

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// ans   {status: "INSUFFICIENT_FUNDS", change: []}

//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// ans   {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

function checkCashRegister(price, cash, cid) {
  const denom = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": .25,
    "DIME": .10,
    "NICKEL": .05,
    "PENNY": .01
  }

  const change = {
    "ONE HUNDRED": 0,
    "TWENTY": 0,
    "TEN": 0,
    "FIVE": 0,
    "ONE": 0,
    "QUARTER": 0,
    "DIME": 0,
    "NICKEL": 0,
    "PENNY": 0
  }

  let due = cash - price;
  let status = "CLOSED";

  for (let i = cid.length - 1; i >= 0; i--) {
    while (cid[i][1] > 0 && denom[cid[i][0]] <= due) {
      due -= denom[cid[i][0]];
      due = Math.round(due * 100) / 100; // make sure JavaScript didn't do any funny math
      change[cid[i][0]] += denom[cid[i][0]];
      cid[i][1] -= denom[cid[i][0]]
    }
    if (cid[i][1] > 0) status = "OPEN";
  }


  if (Math.round(due * 100) / 100 > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] }

  if (status === "CLOSED") {
    return {
      status,
      change: Object.entries(change)
        .map((a) => [a[0], Math.round(a[1] * 100) / 100]).reverse()
    };
  }

  return {
    status,
    change: Object.entries(change)
      .map((a) => [a[0], Math.round(a[1] * 100) / 100])
      .filter((a) => a[1] !== 0)
  };
}
