var size = 0;
var placement = 'point';

var style_airports_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_airports_0(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (airports_0rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(220,157,175,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    }
            else {
                return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(39,147,25,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
            }
        }
        var style = rules_airports_0(feature, value);
        ;

    return style;
};
