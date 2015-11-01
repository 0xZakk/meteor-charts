Template.bar.created = function() {
    var header = this.data.data.header;
    var data = this.data.data.data;
    generateBarChart(data, header);
};

Template.bar.rendered = function() {
    var header = this.data.data.header;
    var data = this.data.data.data;
    generateBarChart(data, header);
};

Template.bar.helpers({
    renderNewBar: function() {
        var header = this.data.header;
        var data = this.data.data;
        generateBarChart(data, header);
        return '';
    },
    noData: function() {
        return this.data.noData;
    },
    header: function() {
        return this.data.header;
    },
    timeframe: function() {
        return Session.get('timeframe');
    }
});


var generateBarChart = function(data, header) {
    redrawCanvas('bar', header);

    var canvas = document.getElementById(header + "-bar-chart-js");
    if (!canvas) return false;
    var ctx = canvas.getContext("2d");

    myBarChart = new Chart(ctx).Bar(data, {
        animation: false,
        responsive: false,
        percentageInnerCutout: 0,
        scaleShowGridLines: false,
        scaleShowHorizontalLines: false,
        scaleLineColor: '#fff',
        scaleFontColor: '#fff',
        barDatasetSpacing: 2,
    });
};