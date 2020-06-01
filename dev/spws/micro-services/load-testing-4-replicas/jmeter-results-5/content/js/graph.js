/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 42.0, "minX": 0.0, "maxY": 258.0, "series": [{"data": [[0.0, 42.0], [0.1, 42.0], [0.2, 42.0], [0.3, 42.0], [0.4, 42.0], [0.5, 42.0], [0.6, 42.0], [0.7, 42.0], [0.8, 42.0], [0.9, 42.0], [1.0, 48.0], [1.1, 48.0], [1.2, 48.0], [1.3, 48.0], [1.4, 48.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 48.0], [2.0, 51.0], [2.1, 51.0], [2.2, 51.0], [2.3, 51.0], [2.4, 51.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 55.0], [3.1, 55.0], [3.2, 55.0], [3.3, 55.0], [3.4, 55.0], [3.5, 55.0], [3.6, 55.0], [3.7, 55.0], [3.8, 55.0], [3.9, 55.0], [4.0, 56.0], [4.1, 56.0], [4.2, 56.0], [4.3, 56.0], [4.4, 56.0], [4.5, 56.0], [4.6, 56.0], [4.7, 56.0], [4.8, 56.0], [4.9, 56.0], [5.0, 58.0], [5.1, 58.0], [5.2, 58.0], [5.3, 58.0], [5.4, 58.0], [5.5, 58.0], [5.6, 58.0], [5.7, 58.0], [5.8, 58.0], [5.9, 58.0], [6.0, 60.0], [6.1, 60.0], [6.2, 60.0], [6.3, 60.0], [6.4, 60.0], [6.5, 60.0], [6.6, 60.0], [6.7, 60.0], [6.8, 60.0], [6.9, 60.0], [7.0, 60.0], [7.1, 60.0], [7.2, 60.0], [7.3, 60.0], [7.4, 60.0], [7.5, 60.0], [7.6, 60.0], [7.7, 60.0], [7.8, 60.0], [7.9, 60.0], [8.0, 62.0], [8.1, 62.0], [8.2, 62.0], [8.3, 62.0], [8.4, 62.0], [8.5, 62.0], [8.6, 62.0], [8.7, 62.0], [8.8, 62.0], [8.9, 62.0], [9.0, 62.0], [9.1, 62.0], [9.2, 62.0], [9.3, 62.0], [9.4, 62.0], [9.5, 62.0], [9.6, 62.0], [9.7, 62.0], [9.8, 62.0], [9.9, 62.0], [10.0, 62.0], [10.1, 62.0], [10.2, 62.0], [10.3, 62.0], [10.4, 62.0], [10.5, 62.0], [10.6, 62.0], [10.7, 62.0], [10.8, 62.0], [10.9, 62.0], [11.0, 63.0], [11.1, 63.0], [11.2, 63.0], [11.3, 63.0], [11.4, 63.0], [11.5, 63.0], [11.6, 63.0], [11.7, 63.0], [11.8, 63.0], [11.9, 63.0], [12.0, 65.0], [12.1, 65.0], [12.2, 65.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 66.0], [13.1, 66.0], [13.2, 66.0], [13.3, 66.0], [13.4, 66.0], [13.5, 66.0], [13.6, 66.0], [13.7, 66.0], [13.8, 66.0], [13.9, 66.0], [14.0, 66.0], [14.1, 66.0], [14.2, 66.0], [14.3, 66.0], [14.4, 66.0], [14.5, 66.0], [14.6, 66.0], [14.7, 66.0], [14.8, 66.0], [14.9, 66.0], [15.0, 67.0], [15.1, 67.0], [15.2, 67.0], [15.3, 67.0], [15.4, 67.0], [15.5, 67.0], [15.6, 67.0], [15.7, 67.0], [15.8, 67.0], [15.9, 67.0], [16.0, 68.0], [16.1, 68.0], [16.2, 68.0], [16.3, 68.0], [16.4, 68.0], [16.5, 68.0], [16.6, 68.0], [16.7, 68.0], [16.8, 68.0], [16.9, 68.0], [17.0, 69.0], [17.1, 69.0], [17.2, 69.0], [17.3, 69.0], [17.4, 69.0], [17.5, 69.0], [17.6, 69.0], [17.7, 69.0], [17.8, 69.0], [17.9, 69.0], [18.0, 73.0], [18.1, 73.0], [18.2, 73.0], [18.3, 73.0], [18.4, 73.0], [18.5, 73.0], [18.6, 73.0], [18.7, 73.0], [18.8, 73.0], [18.9, 73.0], [19.0, 74.0], [19.1, 74.0], [19.2, 74.0], [19.3, 74.0], [19.4, 74.0], [19.5, 74.0], [19.6, 74.0], [19.7, 74.0], [19.8, 74.0], [19.9, 74.0], [20.0, 74.0], [20.1, 74.0], [20.2, 74.0], [20.3, 74.0], [20.4, 74.0], [20.5, 74.0], [20.6, 74.0], [20.7, 74.0], [20.8, 74.0], [20.9, 74.0], [21.0, 81.0], [21.1, 81.0], [21.2, 81.0], [21.3, 81.0], [21.4, 81.0], [21.5, 81.0], [21.6, 81.0], [21.7, 81.0], [21.8, 81.0], [21.9, 81.0], [22.0, 83.0], [22.1, 83.0], [22.2, 83.0], [22.3, 83.0], [22.4, 83.0], [22.5, 83.0], [22.6, 83.0], [22.7, 83.0], [22.8, 83.0], [22.9, 83.0], [23.0, 83.0], [23.1, 83.0], [23.2, 83.0], [23.3, 83.0], [23.4, 83.0], [23.5, 83.0], [23.6, 83.0], [23.7, 83.0], [23.8, 83.0], [23.9, 83.0], [24.0, 84.0], [24.1, 84.0], [24.2, 84.0], [24.3, 84.0], [24.4, 84.0], [24.5, 84.0], [24.6, 84.0], [24.7, 84.0], [24.8, 84.0], [24.9, 84.0], [25.0, 85.0], [25.1, 85.0], [25.2, 85.0], [25.3, 85.0], [25.4, 85.0], [25.5, 85.0], [25.6, 85.0], [25.7, 85.0], [25.8, 85.0], [25.9, 85.0], [26.0, 86.0], [26.1, 86.0], [26.2, 86.0], [26.3, 86.0], [26.4, 86.0], [26.5, 86.0], [26.6, 86.0], [26.7, 86.0], [26.8, 86.0], [26.9, 86.0], [27.0, 86.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 86.0], [27.9, 86.0], [28.0, 86.0], [28.1, 86.0], [28.2, 86.0], [28.3, 86.0], [28.4, 86.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 86.0], [29.4, 86.0], [29.5, 86.0], [29.6, 86.0], [29.7, 86.0], [29.8, 86.0], [29.9, 86.0], [30.0, 88.0], [30.1, 88.0], [30.2, 88.0], [30.3, 88.0], [30.4, 88.0], [30.5, 88.0], [30.6, 88.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 90.0], [31.1, 90.0], [31.2, 90.0], [31.3, 90.0], [31.4, 90.0], [31.5, 90.0], [31.6, 90.0], [31.7, 90.0], [31.8, 90.0], [31.9, 90.0], [32.0, 90.0], [32.1, 90.0], [32.2, 90.0], [32.3, 90.0], [32.4, 90.0], [32.5, 90.0], [32.6, 90.0], [32.7, 90.0], [32.8, 90.0], [32.9, 90.0], [33.0, 92.0], [33.1, 92.0], [33.2, 92.0], [33.3, 92.0], [33.4, 92.0], [33.5, 92.0], [33.6, 92.0], [33.7, 92.0], [33.8, 92.0], [33.9, 92.0], [34.0, 92.0], [34.1, 92.0], [34.2, 92.0], [34.3, 92.0], [34.4, 92.0], [34.5, 92.0], [34.6, 92.0], [34.7, 92.0], [34.8, 92.0], [34.9, 92.0], [35.0, 95.0], [35.1, 95.0], [35.2, 95.0], [35.3, 95.0], [35.4, 95.0], [35.5, 95.0], [35.6, 95.0], [35.7, 95.0], [35.8, 95.0], [35.9, 95.0], [36.0, 95.0], [36.1, 95.0], [36.2, 95.0], [36.3, 95.0], [36.4, 95.0], [36.5, 95.0], [36.6, 95.0], [36.7, 95.0], [36.8, 95.0], [36.9, 95.0], [37.0, 96.0], [37.1, 96.0], [37.2, 96.0], [37.3, 96.0], [37.4, 96.0], [37.5, 96.0], [37.6, 96.0], [37.7, 96.0], [37.8, 96.0], [37.9, 96.0], [38.0, 96.0], [38.1, 96.0], [38.2, 96.0], [38.3, 96.0], [38.4, 96.0], [38.5, 96.0], [38.6, 96.0], [38.7, 96.0], [38.8, 96.0], [38.9, 96.0], [39.0, 97.0], [39.1, 97.0], [39.2, 97.0], [39.3, 97.0], [39.4, 97.0], [39.5, 97.0], [39.6, 97.0], [39.7, 97.0], [39.8, 97.0], [39.9, 97.0], [40.0, 97.0], [40.1, 97.0], [40.2, 97.0], [40.3, 97.0], [40.4, 97.0], [40.5, 97.0], [40.6, 97.0], [40.7, 97.0], [40.8, 97.0], [40.9, 97.0], [41.0, 97.0], [41.1, 97.0], [41.2, 97.0], [41.3, 97.0], [41.4, 97.0], [41.5, 97.0], [41.6, 97.0], [41.7, 97.0], [41.8, 97.0], [41.9, 97.0], [42.0, 98.0], [42.1, 98.0], [42.2, 98.0], [42.3, 98.0], [42.4, 98.0], [42.5, 98.0], [42.6, 98.0], [42.7, 98.0], [42.8, 98.0], [42.9, 98.0], [43.0, 98.0], [43.1, 98.0], [43.2, 98.0], [43.3, 98.0], [43.4, 98.0], [43.5, 98.0], [43.6, 98.0], [43.7, 98.0], [43.8, 98.0], [43.9, 98.0], [44.0, 101.0], [44.1, 101.0], [44.2, 101.0], [44.3, 101.0], [44.4, 101.0], [44.5, 101.0], [44.6, 101.0], [44.7, 101.0], [44.8, 101.0], [44.9, 101.0], [45.0, 101.0], [45.1, 101.0], [45.2, 101.0], [45.3, 101.0], [45.4, 101.0], [45.5, 101.0], [45.6, 101.0], [45.7, 101.0], [45.8, 101.0], [45.9, 101.0], [46.0, 102.0], [46.1, 102.0], [46.2, 102.0], [46.3, 102.0], [46.4, 102.0], [46.5, 102.0], [46.6, 102.0], [46.7, 102.0], [46.8, 102.0], [46.9, 102.0], [47.0, 104.0], [47.1, 104.0], [47.2, 104.0], [47.3, 104.0], [47.4, 104.0], [47.5, 104.0], [47.6, 104.0], [47.7, 104.0], [47.8, 104.0], [47.9, 104.0], [48.0, 104.0], [48.1, 104.0], [48.2, 104.0], [48.3, 104.0], [48.4, 104.0], [48.5, 104.0], [48.6, 104.0], [48.7, 104.0], [48.8, 104.0], [48.9, 104.0], [49.0, 106.0], [49.1, 106.0], [49.2, 106.0], [49.3, 106.0], [49.4, 106.0], [49.5, 106.0], [49.6, 106.0], [49.7, 106.0], [49.8, 106.0], [49.9, 106.0], [50.0, 107.0], [50.1, 107.0], [50.2, 107.0], [50.3, 107.0], [50.4, 107.0], [50.5, 107.0], [50.6, 107.0], [50.7, 107.0], [50.8, 107.0], [50.9, 107.0], [51.0, 108.0], [51.1, 108.0], [51.2, 108.0], [51.3, 108.0], [51.4, 108.0], [51.5, 108.0], [51.6, 108.0], [51.7, 108.0], [51.8, 108.0], [51.9, 108.0], [52.0, 109.0], [52.1, 109.0], [52.2, 109.0], [52.3, 109.0], [52.4, 109.0], [52.5, 109.0], [52.6, 109.0], [52.7, 109.0], [52.8, 109.0], [52.9, 109.0], [53.0, 109.0], [53.1, 109.0], [53.2, 109.0], [53.3, 109.0], [53.4, 109.0], [53.5, 109.0], [53.6, 109.0], [53.7, 109.0], [53.8, 109.0], [53.9, 109.0], [54.0, 109.0], [54.1, 109.0], [54.2, 109.0], [54.3, 109.0], [54.4, 109.0], [54.5, 109.0], [54.6, 109.0], [54.7, 109.0], [54.8, 109.0], [54.9, 109.0], [55.0, 109.0], [55.1, 109.0], [55.2, 109.0], [55.3, 109.0], [55.4, 109.0], [55.5, 109.0], [55.6, 109.0], [55.7, 109.0], [55.8, 109.0], [55.9, 109.0], [56.0, 110.0], [56.1, 110.0], [56.2, 110.0], [56.3, 110.0], [56.4, 110.0], [56.5, 110.0], [56.6, 110.0], [56.7, 110.0], [56.8, 110.0], [56.9, 110.0], [57.0, 111.0], [57.1, 111.0], [57.2, 111.0], [57.3, 111.0], [57.4, 111.0], [57.5, 111.0], [57.6, 111.0], [57.7, 111.0], [57.8, 111.0], [57.9, 111.0], [58.0, 113.0], [58.1, 113.0], [58.2, 113.0], [58.3, 113.0], [58.4, 113.0], [58.5, 113.0], [58.6, 113.0], [58.7, 113.0], [58.8, 113.0], [58.9, 113.0], [59.0, 113.0], [59.1, 113.0], [59.2, 113.0], [59.3, 113.0], [59.4, 113.0], [59.5, 113.0], [59.6, 113.0], [59.7, 113.0], [59.8, 113.0], [59.9, 113.0], [60.0, 115.0], [60.1, 115.0], [60.2, 115.0], [60.3, 115.0], [60.4, 115.0], [60.5, 115.0], [60.6, 115.0], [60.7, 115.0], [60.8, 115.0], [60.9, 115.0], [61.0, 116.0], [61.1, 116.0], [61.2, 116.0], [61.3, 116.0], [61.4, 116.0], [61.5, 116.0], [61.6, 116.0], [61.7, 116.0], [61.8, 116.0], [61.9, 116.0], [62.0, 119.0], [62.1, 119.0], [62.2, 119.0], [62.3, 119.0], [62.4, 119.0], [62.5, 119.0], [62.6, 119.0], [62.7, 119.0], [62.8, 119.0], [62.9, 119.0], [63.0, 120.0], [63.1, 120.0], [63.2, 120.0], [63.3, 120.0], [63.4, 120.0], [63.5, 120.0], [63.6, 120.0], [63.7, 120.0], [63.8, 120.0], [63.9, 120.0], [64.0, 123.0], [64.1, 123.0], [64.2, 123.0], [64.3, 123.0], [64.4, 123.0], [64.5, 123.0], [64.6, 123.0], [64.7, 123.0], [64.8, 123.0], [64.9, 123.0], [65.0, 123.0], [65.1, 123.0], [65.2, 123.0], [65.3, 123.0], [65.4, 123.0], [65.5, 123.0], [65.6, 123.0], [65.7, 123.0], [65.8, 123.0], [65.9, 123.0], [66.0, 124.0], [66.1, 124.0], [66.2, 124.0], [66.3, 124.0], [66.4, 124.0], [66.5, 124.0], [66.6, 124.0], [66.7, 124.0], [66.8, 124.0], [66.9, 124.0], [67.0, 124.0], [67.1, 124.0], [67.2, 124.0], [67.3, 124.0], [67.4, 124.0], [67.5, 124.0], [67.6, 124.0], [67.7, 124.0], [67.8, 124.0], [67.9, 124.0], [68.0, 125.0], [68.1, 125.0], [68.2, 125.0], [68.3, 125.0], [68.4, 125.0], [68.5, 125.0], [68.6, 125.0], [68.7, 125.0], [68.8, 125.0], [68.9, 125.0], [69.0, 129.0], [69.1, 129.0], [69.2, 129.0], [69.3, 129.0], [69.4, 129.0], [69.5, 129.0], [69.6, 129.0], [69.7, 129.0], [69.8, 129.0], [69.9, 129.0], [70.0, 130.0], [70.1, 130.0], [70.2, 130.0], [70.3, 130.0], [70.4, 130.0], [70.5, 130.0], [70.6, 130.0], [70.7, 130.0], [70.8, 130.0], [70.9, 130.0], [71.0, 135.0], [71.1, 135.0], [71.2, 135.0], [71.3, 135.0], [71.4, 135.0], [71.5, 135.0], [71.6, 135.0], [71.7, 135.0], [71.8, 135.0], [71.9, 135.0], [72.0, 137.0], [72.1, 137.0], [72.2, 137.0], [72.3, 137.0], [72.4, 137.0], [72.5, 137.0], [72.6, 137.0], [72.7, 137.0], [72.8, 137.0], [72.9, 137.0], [73.0, 141.0], [73.1, 141.0], [73.2, 141.0], [73.3, 141.0], [73.4, 141.0], [73.5, 141.0], [73.6, 141.0], [73.7, 141.0], [73.8, 141.0], [73.9, 141.0], [74.0, 143.0], [74.1, 143.0], [74.2, 143.0], [74.3, 143.0], [74.4, 143.0], [74.5, 143.0], [74.6, 143.0], [74.7, 143.0], [74.8, 143.0], [74.9, 143.0], [75.0, 148.0], [75.1, 148.0], [75.2, 148.0], [75.3, 148.0], [75.4, 148.0], [75.5, 148.0], [75.6, 148.0], [75.7, 148.0], [75.8, 148.0], [75.9, 148.0], [76.0, 149.0], [76.1, 149.0], [76.2, 149.0], [76.3, 149.0], [76.4, 149.0], [76.5, 149.0], [76.6, 149.0], [76.7, 149.0], [76.8, 149.0], [76.9, 149.0], [77.0, 156.0], [77.1, 156.0], [77.2, 156.0], [77.3, 156.0], [77.4, 156.0], [77.5, 156.0], [77.6, 156.0], [77.7, 156.0], [77.8, 156.0], [77.9, 156.0], [78.0, 157.0], [78.1, 157.0], [78.2, 157.0], [78.3, 157.0], [78.4, 157.0], [78.5, 157.0], [78.6, 157.0], [78.7, 157.0], [78.8, 157.0], [78.9, 157.0], [79.0, 157.0], [79.1, 157.0], [79.2, 157.0], [79.3, 157.0], [79.4, 157.0], [79.5, 157.0], [79.6, 157.0], [79.7, 157.0], [79.8, 157.0], [79.9, 157.0], [80.0, 161.0], [80.1, 161.0], [80.2, 161.0], [80.3, 161.0], [80.4, 161.0], [80.5, 161.0], [80.6, 161.0], [80.7, 161.0], [80.8, 161.0], [80.9, 161.0], [81.0, 166.0], [81.1, 166.0], [81.2, 166.0], [81.3, 166.0], [81.4, 166.0], [81.5, 166.0], [81.6, 166.0], [81.7, 166.0], [81.8, 166.0], [81.9, 166.0], [82.0, 169.0], [82.1, 169.0], [82.2, 169.0], [82.3, 169.0], [82.4, 169.0], [82.5, 169.0], [82.6, 169.0], [82.7, 169.0], [82.8, 169.0], [82.9, 169.0], [83.0, 176.0], [83.1, 176.0], [83.2, 176.0], [83.3, 176.0], [83.4, 176.0], [83.5, 176.0], [83.6, 176.0], [83.7, 176.0], [83.8, 176.0], [83.9, 176.0], [84.0, 180.0], [84.1, 180.0], [84.2, 180.0], [84.3, 180.0], [84.4, 180.0], [84.5, 180.0], [84.6, 180.0], [84.7, 180.0], [84.8, 180.0], [84.9, 180.0], [85.0, 184.0], [85.1, 184.0], [85.2, 184.0], [85.3, 184.0], [85.4, 184.0], [85.5, 184.0], [85.6, 184.0], [85.7, 184.0], [85.8, 184.0], [85.9, 184.0], [86.0, 186.0], [86.1, 186.0], [86.2, 186.0], [86.3, 186.0], [86.4, 186.0], [86.5, 186.0], [86.6, 186.0], [86.7, 186.0], [86.8, 186.0], [86.9, 186.0], [87.0, 187.0], [87.1, 187.0], [87.2, 187.0], [87.3, 187.0], [87.4, 187.0], [87.5, 187.0], [87.6, 187.0], [87.7, 187.0], [87.8, 187.0], [87.9, 187.0], [88.0, 194.0], [88.1, 194.0], [88.2, 194.0], [88.3, 194.0], [88.4, 194.0], [88.5, 194.0], [88.6, 194.0], [88.7, 194.0], [88.8, 194.0], [88.9, 194.0], [89.0, 196.0], [89.1, 196.0], [89.2, 196.0], [89.3, 196.0], [89.4, 196.0], [89.5, 196.0], [89.6, 196.0], [89.7, 196.0], [89.8, 196.0], [89.9, 196.0], [90.0, 200.0], [90.1, 200.0], [90.2, 200.0], [90.3, 200.0], [90.4, 200.0], [90.5, 200.0], [90.6, 200.0], [90.7, 200.0], [90.8, 200.0], [90.9, 200.0], [91.0, 202.0], [91.1, 202.0], [91.2, 202.0], [91.3, 202.0], [91.4, 202.0], [91.5, 202.0], [91.6, 202.0], [91.7, 202.0], [91.8, 202.0], [91.9, 202.0], [92.0, 202.0], [92.1, 202.0], [92.2, 202.0], [92.3, 202.0], [92.4, 202.0], [92.5, 202.0], [92.6, 202.0], [92.7, 202.0], [92.8, 202.0], [92.9, 202.0], [93.0, 209.0], [93.1, 209.0], [93.2, 209.0], [93.3, 209.0], [93.4, 209.0], [93.5, 209.0], [93.6, 209.0], [93.7, 209.0], [93.8, 209.0], [93.9, 209.0], [94.0, 219.0], [94.1, 219.0], [94.2, 219.0], [94.3, 219.0], [94.4, 219.0], [94.5, 219.0], [94.6, 219.0], [94.7, 219.0], [94.8, 219.0], [94.9, 219.0], [95.0, 224.0], [95.1, 224.0], [95.2, 224.0], [95.3, 224.0], [95.4, 224.0], [95.5, 224.0], [95.6, 224.0], [95.7, 224.0], [95.8, 224.0], [95.9, 224.0], [96.0, 226.0], [96.1, 226.0], [96.2, 226.0], [96.3, 226.0], [96.4, 226.0], [96.5, 226.0], [96.6, 226.0], [96.7, 226.0], [96.8, 226.0], [96.9, 226.0], [97.0, 239.0], [97.1, 239.0], [97.2, 239.0], [97.3, 239.0], [97.4, 239.0], [97.5, 239.0], [97.6, 239.0], [97.7, 239.0], [97.8, 239.0], [97.9, 239.0], [98.0, 240.0], [98.1, 240.0], [98.2, 240.0], [98.3, 240.0], [98.4, 240.0], [98.5, 240.0], [98.6, 240.0], [98.7, 240.0], [98.8, 240.0], [98.9, 240.0], [99.0, 258.0], [99.1, 258.0], [99.2, 258.0], [99.3, 258.0], [99.4, 258.0], [99.5, 258.0], [99.6, 258.0], [99.7, 258.0], [99.8, 258.0], [99.9, 258.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 46.0, "series": [{"data": [[0.0, 44.0], [100.0, 46.0], [200.0, 10.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 12.569999999999993, "minX": 1.59101046E12, "maxY": 12.569999999999993, "series": [{"data": [[1.59101046E12, 12.569999999999993]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 71.81818181818183, "minX": 1.0, "maxY": 226.0, "series": [{"data": [[2.0, 96.0], [3.0, 161.0], [4.0, 95.0], [5.0, 123.0], [6.0, 109.0], [7.0, 76.0], [8.0, 71.81818181818183], [9.0, 90.19999999999999], [10.0, 97.35000000000002], [11.0, 107.1], [12.0, 143.0], [13.0, 84.0], [14.0, 148.25], [15.0, 154.66666666666666], [16.0, 200.5], [1.0, 109.0], [17.0, 135.0], [18.0, 169.0], [20.0, 226.0], [21.0, 172.8], [22.0, 159.0], [23.0, 199.0], [24.0, 170.0], [25.0, 182.0], [26.0, 141.33333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.569999999999993, 117.86999999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 335.0, "minX": 1.59101046E12, "maxY": 430.0, "series": [{"data": [[1.59101046E12, 335.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101046E12, 430.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 117.86999999999999, "minX": 1.59101046E12, "maxY": 117.86999999999999, "series": [{"data": [[1.59101046E12, 117.86999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 117.78000000000003, "minX": 1.59101046E12, "maxY": 117.78000000000003, "series": [{"data": [[1.59101046E12, 117.78000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.3400000000000025, "minX": 1.59101046E12, "maxY": 4.3400000000000025, "series": [{"data": [[1.59101046E12, 4.3400000000000025]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 42.0, "minX": 1.59101046E12, "maxY": 258.0, "series": [{"data": [[1.59101046E12, 258.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101046E12, 42.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101046E12, 42.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101046E12, 42.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101046E12, 42.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101046E12, 106.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 106.5, "minX": 100.0, "maxY": 106.5, "series": [{"data": [[100.0, 106.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 106.5, "minX": 100.0, "maxY": 106.5, "series": [{"data": [[100.0, 106.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59101046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59101046E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59101046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59101046E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59101046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59101046E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.59101046E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.59101046E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

