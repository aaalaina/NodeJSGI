const fs = require('fs');
fs.readFile('/Users/Alaina/GIWeekly/june22/planets.txt', 'utf8', (err, data) => {
    if (err){
        return;
    }
    console.log(data)
});