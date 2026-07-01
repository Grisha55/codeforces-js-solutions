function solve() {
    var n = parseInt(readline());
    var results = [];

    for (var test = 0; test < n; test++) {
        var days = parseInt(readline());
        var prices = readline()
            .split(" ")
            .map(function (num) {
                return parseInt(num);
            });

        var count = 0;
        var minFromRight = 1000000001;

        for (var i = days - 1; i >= 0; i--) {
            if (prices[i] > minFromRight) {
                count++;
            }
            if (prices[i] < minFromRight) {
                minFromRight = prices[i];
            }
        }

        results.push(count);
    }

    for (var i = 0; i < results.length; i++) {
        print(results[i]);
    }
}

solve();
