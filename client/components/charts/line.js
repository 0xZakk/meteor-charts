Template.line.created = function() {
    var title = this.data.chartData.header.split(' ').join('-');
    this.data.chartData['title'] = title;
};

Template.line.rendered = function() {
    var data = this.data.chartData;
    generateLineChart(data);
};

Template.line.helpers({
    header: function() {
        return this.chartData.header;
    },
    title: function() {
        return this.chartData.title;
    },
    footer: function() {
        return this.chartData.footer;
    }
});

var generateLineChart = function(data) {
    var canvas = document.getElementById(data.title + "-line-chart-js");

    if (!canvas) return false;
    var ctx = canvas.getContext("2d");

    var myLineChart = new Chart(ctx).Line(data, {
        animation: false,
        responsive: true,
        showTooltips: true,
        scaleShowGridLines: false,
        scaleShowHorizontalLines: false,
        scaleFontColor: '#fff',
        scaleLineColor: '#fff',
        pointDot: false
    });
};