var theNumber = prompt("pick a number","");
    var num = parseInt(theNumber);
    var theSquare;
    var theirNumber;
    var guess;
    theSquare= num * num;
    for (var i=1; i <= 5; i++)
    {
    theirNumber= prompt("what is " + num + " squared","0");
    guess= parseInt(theirNumber);
    if (guess == theSquare)
    {
    alert("Correct");
    break;
    } else
    {
    alert("Attempt " + i + " is wrong");
    }
    
    }