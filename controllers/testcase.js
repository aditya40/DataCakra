exports.waySum = async function (req, res) {
    const {
        arr,
        N
    } = req.body

    function countWays(N) {
        let count = new Array(N + 1);
        count.fill(0);

        count[0] = 1;
        for (let i = 1; i <= N; i++)
            for (let j = 0; j < arr.length; j++)
                if (i >= arr[j])
                    count[i] += count[i - arr[j]];

        return count[N];
    }
    res.status(200).json(countWays(N));
}

exports.maxMin = async function (req, res) {

    const input = req.body.input

    function minMax(array) {
        var min = array[0],
            max = array[0],
            sum = array[0],
            i, v;

        for (i = 1; i < array.length; i++) {
            v = array[i];
            sum += v;
            if (v > max) max = v;
            if (v < min) min = v;
        }
        res.status(200).json({
            max: sum - min,
            min: sum - max
        })
    }
    minMax(input)
}