# zeppeling-highmaps

[Highmaps](https://www.highcharts.com/maps/demo) visualization for Zeppelin data.

![](https://raw.githubusercontent.com/odnoklassniki/zeppelin-highmaps/master/screenshots/world.png)

## Compatibility

This plugin was developed and tested with 0.8.0-SNAPSHOT+ Zeppelin version.

## Input data

All input data should be in [the Maxmind format](https://www.maxmind.com/download/geoip/misc/region_codes.csv).

## Available maps

These maps are available now:
* [Russian Federation (with disputed territories)](http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/mapdata/countries/ru/custom/ru-all-disputed)
* [Ukraine (with regions)](http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/mapdata/countries/ua/ua-all)
* [World (with Palestine areas)](http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/mapdata/custom/world-palestine-highres)

Please, contribute to the project to add new maps.

## License

* [Highmaps](https://www.highcharts.com/maps/demo)
* [Highmaps map collection](https://www.highcharts.com/docs/maps/map-collection)

## Fork features

* Chart containers fixed
<p align="center">
  <img src="https://github.com/egorklimov/zeppelin-highmaps/blob/master/screenshots/bug_fix.gif">
</p>

* Added input data for Russian Federation (with disputed territories) as in [the Highchart mapdata](https://code.highcharts.com/mapdata/)

## Setup

1. Clone repository in ZEPPELIN_HOME/zeppelin-examples
2. Clone file `zeppelin-highmaps-RU_DT.json` in  ZEPPELIN_HOME/helium
