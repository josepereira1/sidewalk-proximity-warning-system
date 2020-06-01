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
        data: {"result": {"minY": 68.0, "minX": 0.0, "maxY": 5601.0, "series": [{"data": [[0.0, 68.0], [0.1, 76.0], [0.2, 86.0], [0.3, 86.0], [0.4, 89.0], [0.5, 99.0], [0.6, 101.0], [0.7, 101.0], [0.8, 104.0], [0.9, 104.0], [1.0, 107.0], [1.1, 108.0], [1.2, 108.0], [1.3, 110.0], [1.4, 110.0], [1.5, 119.0], [1.6, 120.0], [1.7, 123.0], [1.8, 125.0], [1.9, 125.0], [2.0, 126.0], [2.1, 128.0], [2.2, 131.0], [2.3, 132.0], [2.4, 133.0], [2.5, 134.0], [2.6, 135.0], [2.7, 135.0], [2.8, 135.0], [2.9, 135.0], [3.0, 139.0], [3.1, 139.0], [3.2, 139.0], [3.3, 141.0], [3.4, 141.0], [3.5, 141.0], [3.6, 143.0], [3.7, 143.0], [3.8, 144.0], [3.9, 145.0], [4.0, 145.0], [4.1, 145.0], [4.2, 145.0], [4.3, 145.0], [4.4, 146.0], [4.5, 146.0], [4.6, 147.0], [4.7, 147.0], [4.8, 147.0], [4.9, 149.0], [5.0, 149.0], [5.1, 149.0], [5.2, 150.0], [5.3, 150.0], [5.4, 154.0], [5.5, 154.0], [5.6, 154.0], [5.7, 156.0], [5.8, 156.0], [5.9, 157.0], [6.0, 161.0], [6.1, 162.0], [6.2, 162.0], [6.3, 162.0], [6.4, 162.0], [6.5, 163.0], [6.6, 163.0], [6.7, 163.0], [6.8, 164.0], [6.9, 165.0], [7.0, 165.0], [7.1, 165.0], [7.2, 165.0], [7.3, 166.0], [7.4, 166.0], [7.5, 167.0], [7.6, 168.0], [7.7, 168.0], [7.8, 169.0], [7.9, 169.0], [8.0, 169.0], [8.1, 170.0], [8.2, 170.0], [8.3, 170.0], [8.4, 171.0], [8.5, 172.0], [8.6, 173.0], [8.7, 174.0], [8.8, 174.0], [8.9, 175.0], [9.0, 175.0], [9.1, 176.0], [9.2, 177.0], [9.3, 177.0], [9.4, 177.0], [9.5, 178.0], [9.6, 179.0], [9.7, 180.0], [9.8, 180.0], [9.9, 180.0], [10.0, 180.0], [10.1, 181.0], [10.2, 181.0], [10.3, 181.0], [10.4, 182.0], [10.5, 182.0], [10.6, 182.0], [10.7, 183.0], [10.8, 184.0], [10.9, 184.0], [11.0, 184.0], [11.1, 184.0], [11.2, 185.0], [11.3, 185.0], [11.4, 185.0], [11.5, 185.0], [11.6, 185.0], [11.7, 186.0], [11.8, 186.0], [11.9, 186.0], [12.0, 186.0], [12.1, 187.0], [12.2, 187.0], [12.3, 187.0], [12.4, 187.0], [12.5, 187.0], [12.6, 187.0], [12.7, 189.0], [12.8, 190.0], [12.9, 190.0], [13.0, 190.0], [13.1, 191.0], [13.2, 191.0], [13.3, 191.0], [13.4, 191.0], [13.5, 192.0], [13.6, 192.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 193.0], [14.1, 193.0], [14.2, 194.0], [14.3, 194.0], [14.4, 194.0], [14.5, 195.0], [14.6, 195.0], [14.7, 195.0], [14.8, 196.0], [14.9, 196.0], [15.0, 197.0], [15.1, 197.0], [15.2, 197.0], [15.3, 198.0], [15.4, 198.0], [15.5, 198.0], [15.6, 198.0], [15.7, 198.0], [15.8, 198.0], [15.9, 198.0], [16.0, 198.0], [16.1, 199.0], [16.2, 199.0], [16.3, 199.0], [16.4, 199.0], [16.5, 199.0], [16.6, 199.0], [16.7, 199.0], [16.8, 200.0], [16.9, 200.0], [17.0, 200.0], [17.1, 201.0], [17.2, 201.0], [17.3, 201.0], [17.4, 201.0], [17.5, 201.0], [17.6, 202.0], [17.7, 202.0], [17.8, 202.0], [17.9, 203.0], [18.0, 203.0], [18.1, 204.0], [18.2, 204.0], [18.3, 204.0], [18.4, 204.0], [18.5, 205.0], [18.6, 205.0], [18.7, 205.0], [18.8, 205.0], [18.9, 205.0], [19.0, 205.0], [19.1, 206.0], [19.2, 206.0], [19.3, 206.0], [19.4, 206.0], [19.5, 206.0], [19.6, 207.0], [19.7, 208.0], [19.8, 208.0], [19.9, 208.0], [20.0, 208.0], [20.1, 208.0], [20.2, 208.0], [20.3, 208.0], [20.4, 208.0], [20.5, 209.0], [20.6, 209.0], [20.7, 209.0], [20.8, 209.0], [20.9, 209.0], [21.0, 210.0], [21.1, 210.0], [21.2, 210.0], [21.3, 210.0], [21.4, 210.0], [21.5, 210.0], [21.6, 211.0], [21.7, 211.0], [21.8, 211.0], [21.9, 211.0], [22.0, 211.0], [22.1, 212.0], [22.2, 212.0], [22.3, 212.0], [22.4, 212.0], [22.5, 212.0], [22.6, 212.0], [22.7, 213.0], [22.8, 213.0], [22.9, 213.0], [23.0, 214.0], [23.1, 214.0], [23.2, 214.0], [23.3, 214.0], [23.4, 214.0], [23.5, 215.0], [23.6, 215.0], [23.7, 216.0], [23.8, 216.0], [23.9, 216.0], [24.0, 217.0], [24.1, 217.0], [24.2, 218.0], [24.3, 218.0], [24.4, 219.0], [24.5, 219.0], [24.6, 219.0], [24.7, 219.0], [24.8, 219.0], [24.9, 220.0], [25.0, 220.0], [25.1, 220.0], [25.2, 220.0], [25.3, 221.0], [25.4, 221.0], [25.5, 221.0], [25.6, 221.0], [25.7, 222.0], [25.8, 223.0], [25.9, 223.0], [26.0, 224.0], [26.1, 224.0], [26.2, 224.0], [26.3, 224.0], [26.4, 225.0], [26.5, 225.0], [26.6, 225.0], [26.7, 225.0], [26.8, 225.0], [26.9, 225.0], [27.0, 226.0], [27.1, 227.0], [27.2, 228.0], [27.3, 228.0], [27.4, 228.0], [27.5, 228.0], [27.6, 228.0], [27.7, 228.0], [27.8, 228.0], [27.9, 228.0], [28.0, 228.0], [28.1, 229.0], [28.2, 229.0], [28.3, 229.0], [28.4, 229.0], [28.5, 229.0], [28.6, 229.0], [28.7, 230.0], [28.8, 230.0], [28.9, 230.0], [29.0, 231.0], [29.1, 231.0], [29.2, 231.0], [29.3, 231.0], [29.4, 231.0], [29.5, 231.0], [29.6, 232.0], [29.7, 232.0], [29.8, 232.0], [29.9, 232.0], [30.0, 233.0], [30.1, 233.0], [30.2, 233.0], [30.3, 233.0], [30.4, 234.0], [30.5, 234.0], [30.6, 234.0], [30.7, 234.0], [30.8, 234.0], [30.9, 234.0], [31.0, 234.0], [31.1, 235.0], [31.2, 235.0], [31.3, 236.0], [31.4, 236.0], [31.5, 236.0], [31.6, 237.0], [31.7, 237.0], [31.8, 237.0], [31.9, 237.0], [32.0, 238.0], [32.1, 238.0], [32.2, 239.0], [32.3, 239.0], [32.4, 239.0], [32.5, 239.0], [32.6, 240.0], [32.7, 241.0], [32.8, 241.0], [32.9, 241.0], [33.0, 241.0], [33.1, 242.0], [33.2, 242.0], [33.3, 242.0], [33.4, 243.0], [33.5, 243.0], [33.6, 243.0], [33.7, 244.0], [33.8, 244.0], [33.9, 244.0], [34.0, 245.0], [34.1, 245.0], [34.2, 245.0], [34.3, 246.0], [34.4, 246.0], [34.5, 246.0], [34.6, 246.0], [34.7, 247.0], [34.8, 247.0], [34.9, 247.0], [35.0, 247.0], [35.1, 247.0], [35.2, 248.0], [35.3, 248.0], [35.4, 248.0], [35.5, 248.0], [35.6, 249.0], [35.7, 249.0], [35.8, 250.0], [35.9, 250.0], [36.0, 250.0], [36.1, 250.0], [36.2, 250.0], [36.3, 250.0], [36.4, 251.0], [36.5, 251.0], [36.6, 251.0], [36.7, 252.0], [36.8, 252.0], [36.9, 252.0], [37.0, 253.0], [37.1, 253.0], [37.2, 253.0], [37.3, 253.0], [37.4, 254.0], [37.5, 254.0], [37.6, 254.0], [37.7, 255.0], [37.8, 255.0], [37.9, 256.0], [38.0, 256.0], [38.1, 256.0], [38.2, 256.0], [38.3, 257.0], [38.4, 257.0], [38.5, 257.0], [38.6, 257.0], [38.7, 258.0], [38.8, 258.0], [38.9, 258.0], [39.0, 259.0], [39.1, 259.0], [39.2, 259.0], [39.3, 259.0], [39.4, 259.0], [39.5, 260.0], [39.6, 260.0], [39.7, 260.0], [39.8, 260.0], [39.9, 260.0], [40.0, 260.0], [40.1, 260.0], [40.2, 260.0], [40.3, 260.0], [40.4, 261.0], [40.5, 261.0], [40.6, 261.0], [40.7, 261.0], [40.8, 261.0], [40.9, 261.0], [41.0, 261.0], [41.1, 261.0], [41.2, 262.0], [41.3, 263.0], [41.4, 263.0], [41.5, 263.0], [41.6, 263.0], [41.7, 263.0], [41.8, 263.0], [41.9, 263.0], [42.0, 263.0], [42.1, 264.0], [42.2, 264.0], [42.3, 265.0], [42.4, 265.0], [42.5, 266.0], [42.6, 266.0], [42.7, 266.0], [42.8, 266.0], [42.9, 266.0], [43.0, 267.0], [43.1, 267.0], [43.2, 267.0], [43.3, 267.0], [43.4, 268.0], [43.5, 269.0], [43.6, 269.0], [43.7, 269.0], [43.8, 269.0], [43.9, 270.0], [44.0, 270.0], [44.1, 270.0], [44.2, 270.0], [44.3, 270.0], [44.4, 270.0], [44.5, 270.0], [44.6, 271.0], [44.7, 271.0], [44.8, 271.0], [44.9, 273.0], [45.0, 273.0], [45.1, 273.0], [45.2, 273.0], [45.3, 273.0], [45.4, 274.0], [45.5, 274.0], [45.6, 274.0], [45.7, 274.0], [45.8, 274.0], [45.9, 274.0], [46.0, 275.0], [46.1, 275.0], [46.2, 275.0], [46.3, 275.0], [46.4, 275.0], [46.5, 276.0], [46.6, 276.0], [46.7, 277.0], [46.8, 277.0], [46.9, 277.0], [47.0, 277.0], [47.1, 277.0], [47.2, 278.0], [47.3, 278.0], [47.4, 278.0], [47.5, 279.0], [47.6, 279.0], [47.7, 279.0], [47.8, 279.0], [47.9, 280.0], [48.0, 280.0], [48.1, 280.0], [48.2, 281.0], [48.3, 281.0], [48.4, 282.0], [48.5, 282.0], [48.6, 282.0], [48.7, 282.0], [48.8, 282.0], [48.9, 283.0], [49.0, 283.0], [49.1, 284.0], [49.2, 284.0], [49.3, 284.0], [49.4, 284.0], [49.5, 284.0], [49.6, 285.0], [49.7, 285.0], [49.8, 285.0], [49.9, 286.0], [50.0, 286.0], [50.1, 286.0], [50.2, 286.0], [50.3, 286.0], [50.4, 287.0], [50.5, 287.0], [50.6, 288.0], [50.7, 288.0], [50.8, 288.0], [50.9, 288.0], [51.0, 288.0], [51.1, 289.0], [51.2, 289.0], [51.3, 290.0], [51.4, 290.0], [51.5, 290.0], [51.6, 290.0], [51.7, 291.0], [51.8, 291.0], [51.9, 291.0], [52.0, 291.0], [52.1, 291.0], [52.2, 292.0], [52.3, 293.0], [52.4, 293.0], [52.5, 293.0], [52.6, 293.0], [52.7, 294.0], [52.8, 294.0], [52.9, 294.0], [53.0, 294.0], [53.1, 295.0], [53.2, 295.0], [53.3, 295.0], [53.4, 295.0], [53.5, 295.0], [53.6, 295.0], [53.7, 296.0], [53.8, 296.0], [53.9, 296.0], [54.0, 296.0], [54.1, 297.0], [54.2, 298.0], [54.3, 298.0], [54.4, 298.0], [54.5, 299.0], [54.6, 299.0], [54.7, 299.0], [54.8, 299.0], [54.9, 299.0], [55.0, 299.0], [55.1, 300.0], [55.2, 300.0], [55.3, 300.0], [55.4, 300.0], [55.5, 301.0], [55.6, 301.0], [55.7, 301.0], [55.8, 301.0], [55.9, 301.0], [56.0, 301.0], [56.1, 301.0], [56.2, 301.0], [56.3, 302.0], [56.4, 302.0], [56.5, 302.0], [56.6, 302.0], [56.7, 303.0], [56.8, 303.0], [56.9, 303.0], [57.0, 303.0], [57.1, 303.0], [57.2, 303.0], [57.3, 304.0], [57.4, 304.0], [57.5, 304.0], [57.6, 304.0], [57.7, 305.0], [57.8, 306.0], [57.9, 306.0], [58.0, 307.0], [58.1, 307.0], [58.2, 307.0], [58.3, 308.0], [58.4, 308.0], [58.5, 309.0], [58.6, 310.0], [58.7, 310.0], [58.8, 310.0], [58.9, 310.0], [59.0, 310.0], [59.1, 311.0], [59.2, 311.0], [59.3, 311.0], [59.4, 312.0], [59.5, 312.0], [59.6, 312.0], [59.7, 314.0], [59.8, 314.0], [59.9, 314.0], [60.0, 315.0], [60.1, 315.0], [60.2, 315.0], [60.3, 315.0], [60.4, 315.0], [60.5, 317.0], [60.6, 317.0], [60.7, 317.0], [60.8, 317.0], [60.9, 318.0], [61.0, 318.0], [61.1, 318.0], [61.2, 319.0], [61.3, 319.0], [61.4, 319.0], [61.5, 320.0], [61.6, 320.0], [61.7, 320.0], [61.8, 320.0], [61.9, 321.0], [62.0, 321.0], [62.1, 321.0], [62.2, 322.0], [62.3, 322.0], [62.4, 322.0], [62.5, 322.0], [62.6, 323.0], [62.7, 323.0], [62.8, 323.0], [62.9, 323.0], [63.0, 324.0], [63.1, 324.0], [63.2, 324.0], [63.3, 324.0], [63.4, 324.0], [63.5, 325.0], [63.6, 325.0], [63.7, 325.0], [63.8, 326.0], [63.9, 326.0], [64.0, 326.0], [64.1, 327.0], [64.2, 328.0], [64.3, 328.0], [64.4, 328.0], [64.5, 328.0], [64.6, 329.0], [64.7, 329.0], [64.8, 329.0], [64.9, 329.0], [65.0, 329.0], [65.1, 330.0], [65.2, 330.0], [65.3, 330.0], [65.4, 331.0], [65.5, 331.0], [65.6, 331.0], [65.7, 331.0], [65.8, 331.0], [65.9, 332.0], [66.0, 332.0], [66.1, 332.0], [66.2, 333.0], [66.3, 333.0], [66.4, 333.0], [66.5, 333.0], [66.6, 334.0], [66.7, 334.0], [66.8, 334.0], [66.9, 334.0], [67.0, 334.0], [67.1, 335.0], [67.2, 335.0], [67.3, 335.0], [67.4, 336.0], [67.5, 336.0], [67.6, 336.0], [67.7, 337.0], [67.8, 337.0], [67.9, 337.0], [68.0, 337.0], [68.1, 338.0], [68.2, 338.0], [68.3, 338.0], [68.4, 338.0], [68.5, 339.0], [68.6, 339.0], [68.7, 340.0], [68.8, 340.0], [68.9, 340.0], [69.0, 341.0], [69.1, 341.0], [69.2, 341.0], [69.3, 343.0], [69.4, 343.0], [69.5, 343.0], [69.6, 343.0], [69.7, 343.0], [69.8, 343.0], [69.9, 344.0], [70.0, 344.0], [70.1, 344.0], [70.2, 344.0], [70.3, 344.0], [70.4, 345.0], [70.5, 345.0], [70.6, 345.0], [70.7, 346.0], [70.8, 346.0], [70.9, 347.0], [71.0, 347.0], [71.1, 347.0], [71.2, 347.0], [71.3, 347.0], [71.4, 349.0], [71.5, 349.0], [71.6, 350.0], [71.7, 350.0], [71.8, 350.0], [71.9, 351.0], [72.0, 351.0], [72.1, 352.0], [72.2, 352.0], [72.3, 353.0], [72.4, 353.0], [72.5, 354.0], [72.6, 354.0], [72.7, 354.0], [72.8, 354.0], [72.9, 356.0], [73.0, 356.0], [73.1, 357.0], [73.2, 358.0], [73.3, 358.0], [73.4, 359.0], [73.5, 360.0], [73.6, 360.0], [73.7, 360.0], [73.8, 361.0], [73.9, 361.0], [74.0, 361.0], [74.1, 362.0], [74.2, 362.0], [74.3, 362.0], [74.4, 363.0], [74.5, 363.0], [74.6, 364.0], [74.7, 364.0], [74.8, 365.0], [74.9, 365.0], [75.0, 366.0], [75.1, 366.0], [75.2, 366.0], [75.3, 367.0], [75.4, 368.0], [75.5, 368.0], [75.6, 368.0], [75.7, 369.0], [75.8, 369.0], [75.9, 369.0], [76.0, 369.0], [76.1, 369.0], [76.2, 370.0], [76.3, 371.0], [76.4, 371.0], [76.5, 371.0], [76.6, 372.0], [76.7, 372.0], [76.8, 372.0], [76.9, 373.0], [77.0, 374.0], [77.1, 374.0], [77.2, 374.0], [77.3, 375.0], [77.4, 376.0], [77.5, 376.0], [77.6, 377.0], [77.7, 377.0], [77.8, 377.0], [77.9, 377.0], [78.0, 378.0], [78.1, 378.0], [78.2, 378.0], [78.3, 379.0], [78.4, 379.0], [78.5, 379.0], [78.6, 379.0], [78.7, 380.0], [78.8, 380.0], [78.9, 380.0], [79.0, 381.0], [79.1, 382.0], [79.2, 382.0], [79.3, 382.0], [79.4, 383.0], [79.5, 383.0], [79.6, 384.0], [79.7, 384.0], [79.8, 384.0], [79.9, 384.0], [80.0, 384.0], [80.1, 384.0], [80.2, 385.0], [80.3, 386.0], [80.4, 386.0], [80.5, 387.0], [80.6, 388.0], [80.7, 388.0], [80.8, 388.0], [80.9, 388.0], [81.0, 388.0], [81.1, 388.0], [81.2, 390.0], [81.3, 392.0], [81.4, 392.0], [81.5, 392.0], [81.6, 392.0], [81.7, 393.0], [81.8, 395.0], [81.9, 395.0], [82.0, 396.0], [82.1, 396.0], [82.2, 397.0], [82.3, 398.0], [82.4, 398.0], [82.5, 399.0], [82.6, 399.0], [82.7, 399.0], [82.8, 399.0], [82.9, 400.0], [83.0, 400.0], [83.1, 400.0], [83.2, 400.0], [83.3, 401.0], [83.4, 401.0], [83.5, 402.0], [83.6, 403.0], [83.7, 403.0], [83.8, 404.0], [83.9, 404.0], [84.0, 405.0], [84.1, 405.0], [84.2, 406.0], [84.3, 407.0], [84.4, 408.0], [84.5, 409.0], [84.6, 410.0], [84.7, 412.0], [84.8, 413.0], [84.9, 414.0], [85.0, 414.0], [85.1, 414.0], [85.2, 415.0], [85.3, 415.0], [85.4, 415.0], [85.5, 415.0], [85.6, 416.0], [85.7, 416.0], [85.8, 416.0], [85.9, 418.0], [86.0, 420.0], [86.1, 421.0], [86.2, 422.0], [86.3, 424.0], [86.4, 425.0], [86.5, 426.0], [86.6, 426.0], [86.7, 429.0], [86.8, 429.0], [86.9, 431.0], [87.0, 431.0], [87.1, 432.0], [87.2, 434.0], [87.3, 435.0], [87.4, 436.0], [87.5, 436.0], [87.6, 436.0], [87.7, 436.0], [87.8, 439.0], [87.9, 439.0], [88.0, 440.0], [88.1, 440.0], [88.2, 440.0], [88.3, 441.0], [88.4, 441.0], [88.5, 441.0], [88.6, 445.0], [88.7, 445.0], [88.8, 446.0], [88.9, 446.0], [89.0, 446.0], [89.1, 450.0], [89.2, 452.0], [89.3, 452.0], [89.4, 454.0], [89.5, 456.0], [89.6, 456.0], [89.7, 457.0], [89.8, 457.0], [89.9, 460.0], [90.0, 460.0], [90.1, 460.0], [90.2, 461.0], [90.3, 461.0], [90.4, 472.0], [90.5, 472.0], [90.6, 472.0], [90.7, 472.0], [90.8, 472.0], [90.9, 473.0], [91.0, 475.0], [91.1, 477.0], [91.2, 478.0], [91.3, 480.0], [91.4, 481.0], [91.5, 482.0], [91.6, 484.0], [91.7, 486.0], [91.8, 492.0], [91.9, 495.0], [92.0, 497.0], [92.1, 499.0], [92.2, 501.0], [92.3, 501.0], [92.4, 508.0], [92.5, 510.0], [92.6, 513.0], [92.7, 514.0], [92.8, 514.0], [92.9, 518.0], [93.0, 521.0], [93.1, 521.0], [93.2, 521.0], [93.3, 526.0], [93.4, 528.0], [93.5, 529.0], [93.6, 531.0], [93.7, 535.0], [93.8, 542.0], [93.9, 547.0], [94.0, 547.0], [94.1, 548.0], [94.2, 551.0], [94.3, 551.0], [94.4, 557.0], [94.5, 559.0], [94.6, 560.0], [94.7, 560.0], [94.8, 561.0], [94.9, 561.0], [95.0, 563.0], [95.1, 564.0], [95.2, 570.0], [95.3, 573.0], [95.4, 579.0], [95.5, 583.0], [95.6, 583.0], [95.7, 592.0], [95.8, 592.0], [95.9, 598.0], [96.0, 602.0], [96.1, 605.0], [96.2, 605.0], [96.3, 617.0], [96.4, 621.0], [96.5, 637.0], [96.6, 638.0], [96.7, 640.0], [96.8, 647.0], [96.9, 648.0], [97.0, 658.0], [97.1, 661.0], [97.2, 662.0], [97.3, 662.0], [97.4, 668.0], [97.5, 669.0], [97.6, 678.0], [97.7, 687.0], [97.8, 696.0], [97.9, 703.0], [98.0, 705.0], [98.1, 708.0], [98.2, 715.0], [98.3, 723.0], [98.4, 724.0], [98.5, 725.0], [98.6, 728.0], [98.7, 728.0], [98.8, 734.0], [98.9, 741.0], [99.0, 766.0], [99.1, 771.0], [99.2, 774.0], [99.3, 780.0], [99.4, 811.0], [99.5, 821.0], [99.6, 857.0], [99.7, 899.0], [99.8, 5596.0], [99.9, 5601.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 384.0, "series": [{"data": [[0.0, 6.0], [300.0, 278.0], [600.0, 19.0], [700.0, 15.0], [5500.0, 1.0], [5600.0, 1.0], [100.0, 161.0], [200.0, 384.0], [400.0, 93.0], [800.0, 4.0], [500.0, 38.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 922.0, "series": [{"data": [[0.0, 922.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 29.166666666666657, "minX": 1.59101088E12, "maxY": 55.41914893617021, "series": [{"data": [[1.59101094E12, 29.166666666666657], [1.59101088E12, 55.41914893617021]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101094E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 157.57142857142858, "minX": 1.0, "maxY": 5601.0, "series": [{"data": [[2.0, 5596.0], [4.0, 247.5], [5.0, 200.0], [6.0, 273.0], [7.0, 247.0], [8.0, 198.0], [9.0, 193.0], [10.0, 209.0], [11.0, 214.0], [12.0, 181.0], [13.0, 228.0], [14.0, 175.0], [15.0, 295.0], [16.0, 190.0], [17.0, 182.0], [18.0, 181.0], [19.0, 194.0], [20.0, 227.0], [21.0, 208.0], [22.0, 260.0], [23.0, 209.5], [24.0, 173.57142857142858], [25.0, 157.57142857142858], [26.0, 163.88235294117646], [27.0, 182.73333333333332], [28.0, 175.58333333333331], [29.0, 195.42857142857144], [30.0, 246.83333333333334], [31.0, 185.71428571428572], [33.0, 224.14285714285714], [32.0, 194.72727272727272], [35.0, 179.08333333333334], [34.0, 187.9090909090909], [37.0, 216.0], [36.0, 209.15384615384613], [39.0, 251.8888888888889], [38.0, 205.7777777777778], [41.0, 237.60000000000002], [40.0, 230.5], [43.0, 225.57142857142858], [42.0, 240.60000000000002], [45.0, 273.5294117647059], [44.0, 240.5], [47.0, 281.8214285714286], [46.0, 252.4705882352941], [49.0, 290.08108108108115], [48.0, 278.5000000000001], [51.0, 322.6333333333334], [50.0, 313.5116279069766], [53.0, 320.46666666666675], [52.0, 302.70833333333326], [55.0, 311.7916666666666], [54.0, 321.35483870967744], [57.0, 301.695652173913], [56.0, 277.0869565217392], [59.0, 311.9047619047618], [58.0, 333.96000000000004], [61.0, 355.9], [60.0, 323.9285714285714], [63.0, 360.6666666666667], [62.0, 427.49999999999994], [67.0, 340.9], [65.0, 421.52941176470586], [66.0, 343.1875], [64.0, 387.3076923076923], [71.0, 373.3157894736842], [70.0, 413.0], [69.0, 441.95833333333337], [68.0, 391.99999999999994], [75.0, 483.09090909090907], [74.0, 437.7142857142857], [73.0, 358.71428571428567], [72.0, 417.2941176470588], [79.0, 355.0], [78.0, 478.125], [77.0, 370.625], [76.0, 453.1818181818182], [83.0, 447.0], [82.0, 419.5], [81.0, 370.66666666666663], [80.0, 411.75], [87.0, 306.0], [86.0, 385.0], [85.0, 424.25], [84.0, 396.0], [91.0, 282.3125], [90.0, 329.5], [89.0, 360.0], [88.0, 350.5], [92.0, 320.16666666666663], [93.0, 313.0], [1.0, 5601.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[53.84300000000002, 318.05900000000014]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 93.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 201.0, "minX": 1.59101088E12, "maxY": 4042.0, "series": [{"data": [[1.59101094E12, 201.0], [1.59101088E12, 3149.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101094E12, 258.0], [1.59101088E12, 4042.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101094E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 312.5308510638298, "minX": 1.59101088E12, "maxY": 404.66666666666663, "series": [{"data": [[1.59101094E12, 404.66666666666663], [1.59101088E12, 312.5308510638298]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101094E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 312.46808510638334, "minX": 1.59101088E12, "maxY": 404.65, "series": [{"data": [[1.59101094E12, 404.65], [1.59101088E12, 312.46808510638334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101094E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8833333333333331, "minX": 1.59101088E12, "maxY": 4.144680851063835, "series": [{"data": [[1.59101094E12, 0.8833333333333331], [1.59101088E12, 4.144680851063835]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101094E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 68.0, "minX": 1.59101088E12, "maxY": 5601.0, "series": [{"data": [[1.59101094E12, 5601.0], [1.59101088E12, 899.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101094E12, 135.0], [1.59101088E12, 102.40699932694434]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101094E12, 135.0], [1.59101088E12, 104.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101094E12, 135.0], [1.59101088E12, 103.81849966347217]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101094E12, 135.0], [1.59101088E12, 68.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101094E12, 210.5], [1.59101088E12, 291.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101094E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 205.0, "minX": 60.0, "maxY": 381.0, "series": [{"data": [[81.0, 381.0], [165.0, 377.0], [166.0, 205.0], [169.0, 296.0], [177.0, 332.0], [182.0, 231.5], [60.0, 210.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 182.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 205.0, "minX": 60.0, "maxY": 381.0, "series": [{"data": [[81.0, 381.0], [165.0, 377.0], [166.0, 205.0], [169.0, 296.0], [177.0, 332.0], [182.0, 231.5], [60.0, 210.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 182.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.59101088E12, "maxY": 16.466666666666665, "series": [{"data": [[1.59101094E12, 0.2], [1.59101088E12, 16.466666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101094E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.59101088E12, "maxY": 15.666666666666666, "series": [{"data": [[1.59101094E12, 1.0], [1.59101088E12, 15.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101094E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.59101088E12, "maxY": 15.666666666666666, "series": [{"data": [[1.59101094E12, 1.0], [1.59101088E12, 15.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101094E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.59101088E12, "maxY": 15.666666666666666, "series": [{"data": [[1.59101094E12, 1.0], [1.59101088E12, 15.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101094E12, "title": "Total Transactions Per Second"}},
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

