Template.donut.created = function() {
    var title = this.data.chartData.header.split(' ').join('-');
    this.data.chartData['title'] = title;
};

Template.donut.rendered = function() {
    var data = this.data.chartData;
    generateDonutChart(data);
};

Template.donut.helpers({
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

var generateDonutChart = function(data) {
    console.log(data);
    var canvas = document.getElementById(data.title + "-donut-chart-js");

    if (!canvas) return false;
    var ctx = canvas.getContext("2d");

    var myDoughnutChart = new Chart(ctx).Doughnut(data.data, {
        percentageInnerCutout: 65,
        segmentShowStroke: false,
    });
};