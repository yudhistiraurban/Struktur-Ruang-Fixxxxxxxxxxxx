var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SBWP_1 = new ol.format.GeoJSON();
var features_SBWP_1 = format_SBWP_1.readFeatures(json_SBWP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBWP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBWP_1.addFeatures(features_SBWP_1);
var lyr_SBWP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBWP_1, 
                style: style_SBWP_1,
                popuplayertitle: 'SBWP',
                interactive: true,
    title: 'SBWP<br />\
    <img src="styles/legend/SBWP_1_0.png" /> A.1<br />\
    <img src="styles/legend/SBWP_1_1.png" /> A.2<br />\
    <img src="styles/legend/SBWP_1_2.png" /> A.3<br />\
    <img src="styles/legend/SBWP_1_3.png" /> A.4<br />\
    <img src="styles/legend/SBWP_1_4.png" /> A.5<br />\
    <img src="styles/legend/SBWP_1_5.png" /> B.1<br />\
    <img src="styles/legend/SBWP_1_6.png" /> B.2<br />\
    <img src="styles/legend/SBWP_1_7.png" /> B.3<br />\
    <img src="styles/legend/SBWP_1_8.png" /> B.4<br />\
    <img src="styles/legend/SBWP_1_9.png" /> B.5<br />\
    <img src="styles/legend/SBWP_1_10.png" /> C.1<br />\
    <img src="styles/legend/SBWP_1_11.png" /> C.2<br />\
    <img src="styles/legend/SBWP_1_12.png" /> C.3<br />' });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_2_0.png" /> Arteri Pri<br />\
    <img src="styles/legend/JaringanJalan_2_1.png" /> Arteri Sek<br />\
    <img src="styles/legend/JaringanJalan_2_2.png" /> Kolektor P<br />\
    <img src="styles/legend/JaringanJalan_2_3.png" /> Lokal<br />\
    <img src="styles/legend/JaringanJalan_2_4.png" /> Lingkungan<br />' });
var format_MenaraBTS_3 = new ol.format.GeoJSON();
var features_MenaraBTS_3 = format_MenaraBTS_3.readFeatures(json_MenaraBTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MenaraBTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraBTS_3.addFeatures(features_MenaraBTS_3);
var lyr_MenaraBTS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MenaraBTS_3, 
                style: style_MenaraBTS_3,
                popuplayertitle: 'Menara BTS ',
                interactive: false,
                title: '<img src="styles/legend/MenaraBTS_3.png" /> Menara BTS '
            });
var format_JaringanListrik_4 = new ol.format.GeoJSON();
var features_JaringanListrik_4 = format_JaringanListrik_4.readFeatures(json_JaringanListrik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanListrik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanListrik_4.addFeatures(features_JaringanListrik_4);
var lyr_JaringanListrik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanListrik_4, 
                style: style_JaringanListrik_4,
                popuplayertitle: 'Jaringan Listrik',
                interactive: false,
                title: '<img src="styles/legend/JaringanListrik_4.png" /> Jaringan Listrik'
            });
var format_JaringanPerpipaanIPAL_5 = new ol.format.GeoJSON();
var features_JaringanPerpipaanIPAL_5 = format_JaringanPerpipaanIPAL_5.readFeatures(json_JaringanPerpipaanIPAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPerpipaanIPAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPerpipaanIPAL_5.addFeatures(features_JaringanPerpipaanIPAL_5);
var lyr_JaringanPerpipaanIPAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPerpipaanIPAL_5, 
                style: style_JaringanPerpipaanIPAL_5,
                popuplayertitle: 'Jaringan Perpipaan IPAL',
                interactive: false,
                title: '<img src="styles/legend/JaringanPerpipaanIPAL_5.png" /> Jaringan Perpipaan IPAL'
            });
var format_JaringanPerpipaanSPAM_6 = new ol.format.GeoJSON();
var features_JaringanPerpipaanSPAM_6 = format_JaringanPerpipaanSPAM_6.readFeatures(json_JaringanPerpipaanSPAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPerpipaanSPAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPerpipaanSPAM_6.addFeatures(features_JaringanPerpipaanSPAM_6);
var lyr_JaringanPerpipaanSPAM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPerpipaanSPAM_6, 
                style: style_JaringanPerpipaanSPAM_6,
                popuplayertitle: 'Jaringan Perpipaan SPAM',
                interactive: false,
                title: '<img src="styles/legend/JaringanPerpipaanSPAM_6.png" /> Jaringan Perpipaan SPAM'
            });
var format_PedestrianWays_7 = new ol.format.GeoJSON();
var features_PedestrianWays_7 = format_PedestrianWays_7.readFeatures(json_PedestrianWays_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrianWays_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrianWays_7.addFeatures(features_PedestrianWays_7);
var lyr_PedestrianWays_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PedestrianWays_7, 
                style: style_PedestrianWays_7,
                popuplayertitle: 'Pedestrian Ways',
                interactive: true,
    title: 'Pedestrian Ways<br />\
    <img src="styles/legend/PedestrianWays_7_0.png" /> Trotoar<br />' });
var format_JaringanTelekomunikasi_8 = new ol.format.GeoJSON();
var features_JaringanTelekomunikasi_8 = format_JaringanTelekomunikasi_8.readFeatures(json_JaringanTelekomunikasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTelekomunikasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTelekomunikasi_8.addFeatures(features_JaringanTelekomunikasi_8);
var lyr_JaringanTelekomunikasi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTelekomunikasi_8, 
                style: style_JaringanTelekomunikasi_8,
                popuplayertitle: 'Jaringan Telekomunikasi',
                interactive: false,
                title: '<img src="styles/legend/JaringanTelekomunikasi_8.png" /> Jaringan Telekomunikasi'
            });
var format_MenaraBTSTerbagi_9 = new ol.format.GeoJSON();
var features_MenaraBTSTerbagi_9 = format_MenaraBTSTerbagi_9.readFeatures(json_MenaraBTSTerbagi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MenaraBTSTerbagi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraBTSTerbagi_9.addFeatures(features_MenaraBTSTerbagi_9);
var lyr_MenaraBTSTerbagi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MenaraBTSTerbagi_9, 
                style: style_MenaraBTSTerbagi_9,
                popuplayertitle: 'Menara BTS Terbagi',
                interactive: false,
                title: '<img src="styles/legend/MenaraBTSTerbagi_9.png" /> Menara BTS Terbagi'
            });
var format_SaranaIPAL_10 = new ol.format.GeoJSON();
var features_SaranaIPAL_10 = format_SaranaIPAL_10.readFeatures(json_SaranaIPAL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaIPAL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaIPAL_10.addFeatures(features_SaranaIPAL_10);
var lyr_SaranaIPAL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaIPAL_10, 
                style: style_SaranaIPAL_10,
                popuplayertitle: 'Sarana IPAL',
                interactive: false,
                title: '<img src="styles/legend/SaranaIPAL_10.png" /> Sarana IPAL'
            });
var format_JaringanPersampahan_11 = new ol.format.GeoJSON();
var features_JaringanPersampahan_11 = format_JaringanPersampahan_11.readFeatures(json_JaringanPersampahan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPersampahan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPersampahan_11.addFeatures(features_JaringanPersampahan_11);
var lyr_JaringanPersampahan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPersampahan_11, 
                style: style_JaringanPersampahan_11,
                popuplayertitle: 'Jaringan Persampahan',
                interactive: false,
                title: '<img src="styles/legend/JaringanPersampahan_11.png" /> Jaringan Persampahan'
            });
var format_SaranaHalteFeeder_12 = new ol.format.GeoJSON();
var features_SaranaHalteFeeder_12 = format_SaranaHalteFeeder_12.readFeatures(json_SaranaHalteFeeder_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaHalteFeeder_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaHalteFeeder_12.addFeatures(features_SaranaHalteFeeder_12);
var lyr_SaranaHalteFeeder_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaHalteFeeder_12, 
                style: style_SaranaHalteFeeder_12,
                popuplayertitle: 'Sarana Halte Feeder',
                interactive: false,
                title: '<img src="styles/legend/SaranaHalteFeeder_12.png" /> Sarana Halte Feeder'
            });
var format_FASTAMBAHAN_13 = new ol.format.GeoJSON();
var features_FASTAMBAHAN_13 = format_FASTAMBAHAN_13.readFeatures(json_FASTAMBAHAN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASTAMBAHAN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASTAMBAHAN_13.addFeatures(features_FASTAMBAHAN_13);
var lyr_FASTAMBAHAN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FASTAMBAHAN_13, 
                style: style_FASTAMBAHAN_13,
                popuplayertitle: 'FASTAMBAHAN',
                interactive: false,
                title: '<img src="styles/legend/FASTAMBAHAN_13.png" /> FASTAMBAHAN'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_SBWP_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_MenaraBTS_3.setVisible(true);lyr_JaringanListrik_4.setVisible(true);lyr_JaringanPerpipaanIPAL_5.setVisible(true);lyr_JaringanPerpipaanSPAM_6.setVisible(true);lyr_PedestrianWays_7.setVisible(true);lyr_JaringanTelekomunikasi_8.setVisible(true);lyr_MenaraBTSTerbagi_9.setVisible(true);lyr_SaranaIPAL_10.setVisible(true);lyr_JaringanPersampahan_11.setVisible(true);lyr_SaranaHalteFeeder_12.setVisible(true);lyr_FASTAMBAHAN_13.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_SBWP_1,lyr_JaringanJalan_2,lyr_MenaraBTS_3,lyr_JaringanListrik_4,lyr_JaringanPerpipaanIPAL_5,lyr_JaringanPerpipaanSPAM_6,lyr_PedestrianWays_7,lyr_JaringanTelekomunikasi_8,lyr_MenaraBTSTerbagi_9,lyr_SaranaIPAL_10,lyr_JaringanPersampahan_11,lyr_SaranaHalteFeeder_12,lyr_FASTAMBAHAN_13];
lyr_SBWP_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Batas_SWP': 'Batas_SWP', 'Batas_Blok': 'Batas_Blok', });
lyr_JaringanJalan_2.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Shape_Leng': 'Shape_Leng', 'Rencana': 'Rencana', });
lyr_MenaraBTS_3.set('fieldAliases', {'Id': 'Id', });
lyr_JaringanListrik_4.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Shape_Leng': 'Shape_Leng', 'Rencana': 'Rencana', 'JarTelkom': 'JarTelkom', });
lyr_JaringanPerpipaanIPAL_5.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Shape_Leng': 'Shape_Leng', 'Rencana': 'Rencana', });
lyr_JaringanPerpipaanSPAM_6.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Shape_Leng': 'Shape_Leng', 'Rencana': 'Rencana', });
lyr_PedestrianWays_7.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Pedestrian': 'Pedestrian', 'Trotoar': 'Trotoar', });
lyr_JaringanTelekomunikasi_8.set('fieldAliases', {'full_id': 'full_id', 'highway': 'highway', 'Kelas': 'Kelas', 'SPAM': 'SPAM', 'Shape_Leng': 'Shape_Leng', 'Rencana': 'Rencana', 'JarTelkom': 'JarTelkom', });
lyr_MenaraBTSTerbagi_9.set('fieldAliases', {'Id': 'Id', });
lyr_SaranaIPAL_10.set('fieldAliases', {'id': 'id', });
lyr_JaringanPersampahan_11.set('fieldAliases', {'id': 'id', });
lyr_SaranaHalteFeeder_12.set('fieldAliases', {'id': 'id', 'Halte': 'Halte', });
lyr_FASTAMBAHAN_13.set('fieldAliases', {'id': 'id', 'KAWASAN': 'KAWASAN', 'LUAS': 'LUAS', });
lyr_SBWP_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Batas_SWP': 'TextEdit', 'Batas_Blok': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Rencana': 'TextEdit', });
lyr_MenaraBTS_3.set('fieldImages', {'Id': 'Range', });
lyr_JaringanListrik_4.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Rencana': 'TextEdit', 'JarTelkom': 'TextEdit', });
lyr_JaringanPerpipaanIPAL_5.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Rencana': 'TextEdit', });
lyr_JaringanPerpipaanSPAM_6.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Rencana': 'TextEdit', });
lyr_PedestrianWays_7.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Pedestrian': 'TextEdit', 'Trotoar': 'TextEdit', });
lyr_JaringanTelekomunikasi_8.set('fieldImages', {'full_id': 'TextEdit', 'highway': 'TextEdit', 'Kelas': 'TextEdit', 'SPAM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Rencana': 'TextEdit', 'JarTelkom': 'TextEdit', });
lyr_MenaraBTSTerbagi_9.set('fieldImages', {'Id': 'Range', });
lyr_SaranaIPAL_10.set('fieldImages', {'id': 'TextEdit', });
lyr_JaringanPersampahan_11.set('fieldImages', {'id': 'TextEdit', });
lyr_SaranaHalteFeeder_12.set('fieldImages', {'id': 'TextEdit', 'Halte': 'TextEdit', });
lyr_FASTAMBAHAN_13.set('fieldImages', {'id': '', 'KAWASAN': '', 'LUAS': '', });
lyr_SBWP_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Batas_SWP': 'inline label - visible with data', 'Batas_Blok': 'inline label - visible with data', });
lyr_JaringanJalan_2.set('fieldLabels', {'full_id': 'hidden field', 'highway': 'hidden field', 'Kelas': 'hidden field', 'SPAM': 'hidden field', 'Shape_Leng': 'hidden field', 'Rencana': 'hidden field', });
lyr_MenaraBTS_3.set('fieldLabels', {'Id': 'hidden field', });
lyr_JaringanListrik_4.set('fieldLabels', {'full_id': 'hidden field', 'highway': 'hidden field', 'Kelas': 'hidden field', 'SPAM': 'hidden field', 'Shape_Leng': 'hidden field', 'Rencana': 'hidden field', 'JarTelkom': 'hidden field', });
lyr_JaringanPerpipaanIPAL_5.set('fieldLabels', {'full_id': 'hidden field', 'highway': 'hidden field', 'Kelas': 'hidden field', 'SPAM': 'hidden field', 'Shape_Leng': 'hidden field', 'Rencana': 'hidden field', });
lyr_JaringanPerpipaanSPAM_6.set('fieldLabels', {'full_id': 'hidden field', 'highway': 'hidden field', 'Kelas': 'hidden field', 'SPAM': 'hidden field', 'Shape_Leng': 'hidden field', 'Rencana': 'hidden field', });
lyr_PedestrianWays_7.set('fieldLabels', {'full_id': 'no label', 'highway': 'no label', 'Kelas': 'no label', 'SPAM': 'no label', 'Pedestrian': 'no label', 'Trotoar': 'no label', });
lyr_JaringanTelekomunikasi_8.set('fieldLabels', {'full_id': 'hidden field', 'highway': 'hidden field', 'Kelas': 'hidden field', 'SPAM': 'hidden field', 'Shape_Leng': 'hidden field', 'Rencana': 'hidden field', 'JarTelkom': 'hidden field', });
lyr_MenaraBTSTerbagi_9.set('fieldLabels', {'Id': 'hidden field', });
lyr_SaranaIPAL_10.set('fieldLabels', {'id': 'hidden field', });
lyr_JaringanPersampahan_11.set('fieldLabels', {'id': 'hidden field', });
lyr_SaranaHalteFeeder_12.set('fieldLabels', {'id': 'hidden field', 'Halte': 'hidden field', });
lyr_FASTAMBAHAN_13.set('fieldLabels', {'id': 'hidden field', 'KAWASAN': 'hidden field', 'LUAS': 'hidden field', });
lyr_FASTAMBAHAN_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});