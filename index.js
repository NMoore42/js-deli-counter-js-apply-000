

function takeANumber(katzDeliLine = [], custName){
  //return welcome message including person's name and place in line (index +1)
  katzDeliLine.push(custName);
  return `Welcome, ${custName}. You are number ${katzDeliLine.indexOf(custName) + 1} in line.`
}

function nowServing(katzDeliLine){
  //return the first person in line and remove individual in line
  if (katzDeliLine.length > 1){
    
  } else {
    
  }
  //If no more people are in line, return "There is nobody waiting to be served"
}

function currentLine(katzDeliLine) {
  //Accepts current line and returns in string format: "The line is currently: Person1, Person 2, ect..."
  //If nobody is in line return "The line is currently empty."
}