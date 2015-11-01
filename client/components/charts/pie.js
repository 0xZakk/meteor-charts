Template.pie.rendered = function() {
    var d1 = this.data.data.d1;
    var d2 = this.data.data.d2;
    var header = this.data.data.header;
    var type = this.data.data.type;

    generatePieChart(d1, d2, header, type);
};

Template.pie.helpers({
    noData: function() {
        var d1 = this.data.d1;
        var d2 = this.data.d2;

        if (d1 >= 0 && d2 >= 0) {
            return false;
        } else {
            return true;
        }
    },
    renderNewPie: function() {
        if (!this.data) {
            return
        }

        var d1 = this.data.d1;
        var d2 = this.data.d2;
        var header = this.data.header;
        var type = this.data.type;

        generatePieChart(d1, d2, header, type);
        return '';
    },
    header: function() {
        return this.data.header;
    }
});

var generatePieChart = function(d1, d2, header, type) {
    redrawCanvas('pie', header);

    var canvas = document.getElementById(header + "-pie-chart-js");

    if (!canvas) return false;
    var ctx = canvas.getContext("2d");

    var data = [];

    if (d1 > 0) {
        data.push({
            value: d1,
            color: "rgb(89,171,227)",
            label: "Male"
        });
    }

    if (d2 > 0) {
        data.push({
            value: d2,
            color: "rgb(210,82,127)",
            label: "Female"
        });
    }

    var chartOptions = {
        animation: false,
        responsive: false,
        percentageInnerCutout: 0,
        showTooltips: true,
        segmentShowStroke: false,
    };

    // if (type === "Viewer") {
    //     // _.extend({name: 'moe'}, {age: 50});
    //     _.extend(chartOptions, {
    //         tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%"
    //     });
    // }

    if (type === "Attention") {
        // _.extend({name: 'moe'}, {age: 50});
        _.extend(chartOptions, {
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>s"
        });
    }

    var myPieChart = new Chart(ctx).Doughnut(data, chartOptions);
};