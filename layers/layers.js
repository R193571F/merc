var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Roadsconditionmap_1 = new ol.format.GeoJSON();
var features_Roadsconditionmap_1 = format_Roadsconditionmap_1.readFeatures(json_Roadsconditionmap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadsconditionmap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadsconditionmap_1.addFeatures(features_Roadsconditionmap_1);
var lyr_Roadsconditionmap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadsconditionmap_1, 
                style: style_Roadsconditionmap_1,
                popuplayertitle: "Roads condition map",
                interactive: false,
    title: 'Roads condition map<br />\
    <img src="styles/legend/Roadsconditionmap_1_0.png" /> very bad<br />\
    <img src="styles/legend/Roadsconditionmap_1_1.png" /> bad<br />\
    <img src="styles/legend/Roadsconditionmap_1_2.png" /> medium<br />\
    <img src="styles/legend/Roadsconditionmap_1_3.png" /> good<br />\
    <img src="styles/legend/Roadsconditionmap_1_4.png" /> very good<br />'
        });
var format_Roadsmaintainanceactions_2 = new ol.format.GeoJSON();
var features_Roadsmaintainanceactions_2 = format_Roadsmaintainanceactions_2.readFeatures(json_Roadsmaintainanceactions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadsmaintainanceactions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadsmaintainanceactions_2.addFeatures(features_Roadsmaintainanceactions_2);
var lyr_Roadsmaintainanceactions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadsmaintainanceactions_2, 
                style: style_Roadsmaintainanceactions_2,
                popuplayertitle: "Roads maintainance actions",
                interactive: false,
    title: 'Roads maintainance actions<br />\
    <img src="styles/legend/Roadsmaintainanceactions_2_0.png" /> Extremely bad(Total resurfacing))<br />\
    <img src="styles/legend/Roadsmaintainanceactions_2_1.png" /> Failed(Major repairs)<br />\
    <img src="styles/legend/Roadsmaintainanceactions_2_2.png" /> Good(Do nothing)<br />'
        });
var format_HarareCBDboundary_3 = new ol.format.GeoJSON();
var features_HarareCBDboundary_3 = format_HarareCBDboundary_3.readFeatures(json_HarareCBDboundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HarareCBDboundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HarareCBDboundary_3.addFeatures(features_HarareCBDboundary_3);
var lyr_HarareCBDboundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HarareCBDboundary_3, 
                style: style_HarareCBDboundary_3,
                popuplayertitle: "Harare CBD boundary",
                interactive: false,
                title: '<img src="styles/legend/HarareCBDboundary_3.png" /> Harare CBD boundary'
            });
var format_Existingparkingstations_4 = new ol.format.GeoJSON();
var features_Existingparkingstations_4 = format_Existingparkingstations_4.readFeatures(json_Existingparkingstations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existingparkingstations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existingparkingstations_4.addFeatures(features_Existingparkingstations_4);
var lyr_Existingparkingstations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Existingparkingstations_4, 
                style: style_Existingparkingstations_4,
                popuplayertitle: "Existing parking stations ",
                interactive: true,
                title: '<img src="styles/legend/Existingparkingstations_4.png" /> Existing parking stations '
            });
var format_Generalsuitableareasforparkingsations_5 = new ol.format.GeoJSON();
var features_Generalsuitableareasforparkingsations_5 = format_Generalsuitableareasforparkingsations_5.readFeatures(json_Generalsuitableareasforparkingsations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Generalsuitableareasforparkingsations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generalsuitableareasforparkingsations_5.addFeatures(features_Generalsuitableareasforparkingsations_5);
var lyr_Generalsuitableareasforparkingsations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Generalsuitableareasforparkingsations_5, 
                style: style_Generalsuitableareasforparkingsations_5,
                popuplayertitle: "General suitable areas for parking sations",
                interactive: false,
    title: 'General suitable areas for parking sations<br />\
    <img src="styles/legend/Generalsuitableareasforparkingsations_5_0.png" /> low<br />\
    <img src="styles/legend/Generalsuitableareasforparkingsations_5_1.png" /> medium<br />\
    <img src="styles/legend/Generalsuitableareasforparkingsations_5_2.png" /> high<br />\
    <img src="styles/legend/Generalsuitableareasforparkingsations_5_3.png" /> very high<br />'
        });
var format_Points_6 = new ol.format.GeoJSON();
var features_Points_6 = format_Points_6.readFeatures(json_Points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_6.addFeatures(features_Points_6);
var lyr_Points_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_6, 
                style: style_Points_6,
                popuplayertitle: "Points",
                interactive: false,
                title: '<img src="styles/legend/Points_6.png" /> Points'
            });
var lyr_RAILWAY_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webmap:Railway",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RAILWAY",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RAILWAY_7, 0]);
var format_Suitabilitymapforparkingstations_8 = new ol.format.GeoJSON();
var features_Suitabilitymapforparkingstations_8 = format_Suitabilitymapforparkingstations_8.readFeatures(json_Suitabilitymapforparkingstations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suitabilitymapforparkingstations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suitabilitymapforparkingstations_8.addFeatures(features_Suitabilitymapforparkingstations_8);
var lyr_Suitabilitymapforparkingstations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suitabilitymapforparkingstations_8, 
                style: style_Suitabilitymapforparkingstations_8,
                popuplayertitle: "Suitability map for parking stations",
                interactive: false,
    title: 'Suitability map for parking stations<br />\
    <img src="styles/legend/Suitabilitymapforparkingstations_8_0.png" /> not suitable<br />\
    <img src="styles/legend/Suitabilitymapforparkingstations_8_1.png" /> suitable<br />\
    <img src="styles/legend/Suitabilitymapforparkingstations_8_2.png" /> most suitable<br />'
        });
var format_Harareroads_9 = new ol.format.GeoJSON();
var features_Harareroads_9 = format_Harareroads_9.readFeatures(json_Harareroads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Harareroads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harareroads_9.addFeatures(features_Harareroads_9);
var lyr_Harareroads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harareroads_9, 
                style: style_Harareroads_9,
                popuplayertitle: "Harare roads",
                interactive: true,
                title: '<img src="styles/legend/Harareroads_9.png" /> Harare roads'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Roadsconditionmap_1.setVisible(true);lyr_Roadsmaintainanceactions_2.setVisible(true);lyr_HarareCBDboundary_3.setVisible(true);lyr_Existingparkingstations_4.setVisible(true);lyr_Generalsuitableareasforparkingsations_5.setVisible(true);lyr_Points_6.setVisible(true);lyr_RAILWAY_7.setVisible(true);lyr_Suitabilitymapforparkingstations_8.setVisible(true);lyr_Harareroads_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Roadsconditionmap_1,lyr_Roadsmaintainanceactions_2,lyr_HarareCBDboundary_3,lyr_Existingparkingstations_4,lyr_Generalsuitableareasforparkingsations_5,lyr_Points_6,lyr_RAILWAY_7,lyr_Suitabilitymapforparkingstations_8,lyr_Harareroads_9];
lyr_Roadsconditionmap_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'road_condi': 'road_condi', });
lyr_Roadsmaintainanceactions_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'road_condi': 'road_condi', });
lyr_HarareCBDboundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'name': 'name', });
lyr_Existingparkingstations_4.set('fieldAliases', {'Id': 'Id', });
lyr_Generalsuitableareasforparkingsations_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Points_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Suitabilitymapforparkingstations_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Harareroads_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'Shape_Leng': 'Shape_Leng', });
lyr_Roadsconditionmap_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'road_condi': 'TextEdit', });
lyr_Roadsmaintainanceactions_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'road_condi': 'TextEdit', });
lyr_HarareCBDboundary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'name': 'TextEdit', });
lyr_Existingparkingstations_4.set('fieldImages', {'Id': 'Range', });
lyr_Generalsuitableareasforparkingsations_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Points_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Suitabilitymapforparkingstations_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Harareroads_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_Roadsconditionmap_1.set('fieldLabels', {'osm_id': 'header label - always visible', 'code': 'hidden field', 'fclass': 'header label - visible with data', 'name': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'road_condi': 'hidden field', });
lyr_Roadsmaintainanceactions_2.set('fieldLabels', {'osm_id': 'header label - always visible', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'road_condi': 'hidden field', });
lyr_HarareCBDboundary_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'GID_3': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Existingparkingstations_4.set('fieldLabels', {'Id': 'hidden field', });
lyr_Generalsuitableareasforparkingsations_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Points_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', });
lyr_Suitabilitymapforparkingstations_8.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', });
lyr_Harareroads_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'osm_id': 'hidden field', 'name': 'inline label - visible with data', 'ref': 'hidden field', 'type': 'hidden field', 'oneway': 'hidden field', 'bridge': 'hidden field', 'maxspeed': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_Harareroads_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});