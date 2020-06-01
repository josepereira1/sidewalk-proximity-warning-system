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
        data: {"result": {"minY": 193.0, "minX": 0.0, "maxY": 6090.0, "series": [{"data": [[0.0, 193.0], [0.1, 199.0], [0.2, 204.0], [0.3, 204.0], [0.4, 217.0], [0.5, 231.0], [0.6, 238.0], [0.7, 241.0], [0.8, 241.0], [0.9, 244.0], [1.0, 244.0], [1.1, 245.0], [1.2, 249.0], [1.3, 250.0], [1.4, 250.0], [1.5, 258.0], [1.6, 258.0], [1.7, 272.0], [1.8, 275.0], [1.9, 275.0], [2.0, 278.0], [2.1, 279.0], [2.2, 280.0], [2.3, 280.0], [2.4, 280.0], [2.5, 285.0], [2.6, 286.0], [2.7, 298.0], [2.8, 301.0], [2.9, 318.0], [3.0, 326.0], [3.1, 327.0], [3.2, 327.0], [3.3, 328.0], [3.4, 330.0], [3.5, 335.0], [3.6, 336.0], [3.7, 337.0], [3.8, 339.0], [3.9, 339.0], [4.0, 341.0], [4.1, 342.0], [4.2, 344.0], [4.3, 348.0], [4.4, 353.0], [4.5, 354.0], [4.6, 362.0], [4.7, 362.0], [4.8, 362.0], [4.9, 370.0], [5.0, 371.0], [5.1, 373.0], [5.2, 374.0], [5.3, 375.0], [5.4, 377.0], [5.5, 378.0], [5.6, 379.0], [5.7, 380.0], [5.8, 380.0], [5.9, 381.0], [6.0, 386.0], [6.1, 388.0], [6.2, 390.0], [6.3, 392.0], [6.4, 395.0], [6.5, 395.0], [6.6, 400.0], [6.7, 403.0], [6.8, 404.0], [6.9, 405.0], [7.0, 406.0], [7.1, 407.0], [7.2, 407.0], [7.3, 413.0], [7.4, 415.0], [7.5, 415.0], [7.6, 416.0], [7.7, 416.0], [7.8, 416.0], [7.9, 417.0], [8.0, 419.0], [8.1, 420.0], [8.2, 422.0], [8.3, 423.0], [8.4, 424.0], [8.5, 425.0], [8.6, 425.0], [8.7, 427.0], [8.8, 427.0], [8.9, 428.0], [9.0, 429.0], [9.1, 430.0], [9.2, 434.0], [9.3, 436.0], [9.4, 437.0], [9.5, 438.0], [9.6, 439.0], [9.7, 440.0], [9.8, 440.0], [9.9, 441.0], [10.0, 442.0], [10.1, 443.0], [10.2, 445.0], [10.3, 446.0], [10.4, 447.0], [10.5, 447.0], [10.6, 449.0], [10.7, 449.0], [10.8, 451.0], [10.9, 452.0], [11.0, 455.0], [11.1, 456.0], [11.2, 457.0], [11.3, 459.0], [11.4, 459.0], [11.5, 459.0], [11.6, 459.0], [11.7, 462.0], [11.8, 462.0], [11.9, 464.0], [12.0, 464.0], [12.1, 467.0], [12.2, 467.0], [12.3, 468.0], [12.4, 468.0], [12.5, 469.0], [12.6, 470.0], [12.7, 470.0], [12.8, 471.0], [12.9, 472.0], [13.0, 474.0], [13.1, 475.0], [13.2, 478.0], [13.3, 478.0], [13.4, 479.0], [13.5, 480.0], [13.6, 481.0], [13.7, 481.0], [13.8, 482.0], [13.9, 482.0], [14.0, 484.0], [14.1, 484.0], [14.2, 485.0], [14.3, 485.0], [14.4, 486.0], [14.5, 486.0], [14.6, 487.0], [14.7, 487.0], [14.8, 487.0], [14.9, 490.0], [15.0, 490.0], [15.1, 491.0], [15.2, 493.0], [15.3, 495.0], [15.4, 495.0], [15.5, 496.0], [15.6, 496.0], [15.7, 497.0], [15.8, 497.0], [15.9, 497.0], [16.0, 498.0], [16.1, 498.0], [16.2, 501.0], [16.3, 502.0], [16.4, 502.0], [16.5, 503.0], [16.6, 503.0], [16.7, 503.0], [16.8, 504.0], [16.9, 504.0], [17.0, 505.0], [17.1, 506.0], [17.2, 506.0], [17.3, 507.0], [17.4, 507.0], [17.5, 508.0], [17.6, 508.0], [17.7, 509.0], [17.8, 510.0], [17.9, 511.0], [18.0, 512.0], [18.1, 512.0], [18.2, 512.0], [18.3, 512.0], [18.4, 513.0], [18.5, 513.0], [18.6, 514.0], [18.7, 515.0], [18.8, 518.0], [18.9, 518.0], [19.0, 522.0], [19.1, 522.0], [19.2, 523.0], [19.3, 524.0], [19.4, 524.0], [19.5, 527.0], [19.6, 529.0], [19.7, 530.0], [19.8, 530.0], [19.9, 530.0], [20.0, 530.0], [20.1, 531.0], [20.2, 531.0], [20.3, 531.0], [20.4, 533.0], [20.5, 534.0], [20.6, 534.0], [20.7, 536.0], [20.8, 537.0], [20.9, 537.0], [21.0, 537.0], [21.1, 538.0], [21.2, 538.0], [21.3, 541.0], [21.4, 541.0], [21.5, 543.0], [21.6, 543.0], [21.7, 544.0], [21.8, 544.0], [21.9, 546.0], [22.0, 549.0], [22.1, 550.0], [22.2, 550.0], [22.3, 551.0], [22.4, 551.0], [22.5, 552.0], [22.6, 554.0], [22.7, 555.0], [22.8, 556.0], [22.9, 557.0], [23.0, 557.0], [23.1, 559.0], [23.2, 560.0], [23.3, 561.0], [23.4, 562.0], [23.5, 563.0], [23.6, 563.0], [23.7, 564.0], [23.8, 565.0], [23.9, 566.0], [24.0, 566.0], [24.1, 567.0], [24.2, 567.0], [24.3, 567.0], [24.4, 569.0], [24.5, 569.0], [24.6, 570.0], [24.7, 571.0], [24.8, 572.0], [24.9, 573.0], [25.0, 574.0], [25.1, 574.0], [25.2, 575.0], [25.3, 576.0], [25.4, 577.0], [25.5, 577.0], [25.6, 578.0], [25.7, 581.0], [25.8, 582.0], [25.9, 582.0], [26.0, 583.0], [26.1, 583.0], [26.2, 583.0], [26.3, 583.0], [26.4, 586.0], [26.5, 588.0], [26.6, 588.0], [26.7, 588.0], [26.8, 589.0], [26.9, 589.0], [27.0, 590.0], [27.1, 591.0], [27.2, 593.0], [27.3, 593.0], [27.4, 594.0], [27.5, 594.0], [27.6, 595.0], [27.7, 597.0], [27.8, 597.0], [27.9, 598.0], [28.0, 600.0], [28.1, 601.0], [28.2, 601.0], [28.3, 602.0], [28.4, 603.0], [28.5, 603.0], [28.6, 603.0], [28.7, 603.0], [28.8, 603.0], [28.9, 604.0], [29.0, 604.0], [29.1, 605.0], [29.2, 606.0], [29.3, 606.0], [29.4, 607.0], [29.5, 607.0], [29.6, 609.0], [29.7, 611.0], [29.8, 613.0], [29.9, 617.0], [30.0, 618.0], [30.1, 618.0], [30.2, 619.0], [30.3, 619.0], [30.4, 621.0], [30.5, 624.0], [30.6, 624.0], [30.7, 624.0], [30.8, 624.0], [30.9, 625.0], [31.0, 625.0], [31.1, 625.0], [31.2, 626.0], [31.3, 627.0], [31.4, 627.0], [31.5, 627.0], [31.6, 627.0], [31.7, 628.0], [31.8, 629.0], [31.9, 630.0], [32.0, 630.0], [32.1, 631.0], [32.2, 632.0], [32.3, 632.0], [32.4, 633.0], [32.5, 635.0], [32.6, 636.0], [32.7, 637.0], [32.8, 637.0], [32.9, 638.0], [33.0, 639.0], [33.1, 640.0], [33.2, 641.0], [33.3, 641.0], [33.4, 642.0], [33.5, 643.0], [33.6, 644.0], [33.7, 645.0], [33.8, 646.0], [33.9, 647.0], [34.0, 647.0], [34.1, 648.0], [34.2, 649.0], [34.3, 650.0], [34.4, 650.0], [34.5, 650.0], [34.6, 650.0], [34.7, 651.0], [34.8, 653.0], [34.9, 653.0], [35.0, 655.0], [35.1, 656.0], [35.2, 656.0], [35.3, 656.0], [35.4, 658.0], [35.5, 660.0], [35.6, 660.0], [35.7, 661.0], [35.8, 662.0], [35.9, 664.0], [36.0, 665.0], [36.1, 665.0], [36.2, 666.0], [36.3, 668.0], [36.4, 672.0], [36.5, 672.0], [36.6, 673.0], [36.7, 675.0], [36.8, 675.0], [36.9, 676.0], [37.0, 677.0], [37.1, 679.0], [37.2, 679.0], [37.3, 680.0], [37.4, 682.0], [37.5, 682.0], [37.6, 682.0], [37.7, 682.0], [37.8, 683.0], [37.9, 683.0], [38.0, 685.0], [38.1, 686.0], [38.2, 687.0], [38.3, 687.0], [38.4, 689.0], [38.5, 691.0], [38.6, 691.0], [38.7, 691.0], [38.8, 691.0], [38.9, 694.0], [39.0, 694.0], [39.1, 697.0], [39.2, 699.0], [39.3, 701.0], [39.4, 704.0], [39.5, 706.0], [39.6, 707.0], [39.7, 708.0], [39.8, 711.0], [39.9, 712.0], [40.0, 712.0], [40.1, 713.0], [40.2, 715.0], [40.3, 717.0], [40.4, 718.0], [40.5, 718.0], [40.6, 720.0], [40.7, 720.0], [40.8, 720.0], [40.9, 724.0], [41.0, 724.0], [41.1, 724.0], [41.2, 724.0], [41.3, 728.0], [41.4, 728.0], [41.5, 728.0], [41.6, 729.0], [41.7, 730.0], [41.8, 731.0], [41.9, 731.0], [42.0, 732.0], [42.1, 732.0], [42.2, 734.0], [42.3, 735.0], [42.4, 736.0], [42.5, 736.0], [42.6, 737.0], [42.7, 737.0], [42.8, 737.0], [42.9, 738.0], [43.0, 739.0], [43.1, 743.0], [43.2, 743.0], [43.3, 745.0], [43.4, 747.0], [43.5, 747.0], [43.6, 748.0], [43.7, 748.0], [43.8, 748.0], [43.9, 749.0], [44.0, 749.0], [44.1, 750.0], [44.2, 751.0], [44.3, 751.0], [44.4, 751.0], [44.5, 751.0], [44.6, 752.0], [44.7, 754.0], [44.8, 754.0], [44.9, 755.0], [45.0, 755.0], [45.1, 756.0], [45.2, 756.0], [45.3, 757.0], [45.4, 760.0], [45.5, 764.0], [45.6, 765.0], [45.7, 765.0], [45.8, 766.0], [45.9, 766.0], [46.0, 766.0], [46.1, 766.0], [46.2, 767.0], [46.3, 769.0], [46.4, 770.0], [46.5, 770.0], [46.6, 771.0], [46.7, 771.0], [46.8, 771.0], [46.9, 772.0], [47.0, 772.0], [47.1, 773.0], [47.2, 773.0], [47.3, 775.0], [47.4, 775.0], [47.5, 775.0], [47.6, 775.0], [47.7, 775.0], [47.8, 776.0], [47.9, 777.0], [48.0, 777.0], [48.1, 778.0], [48.2, 778.0], [48.3, 779.0], [48.4, 779.0], [48.5, 780.0], [48.6, 780.0], [48.7, 780.0], [48.8, 781.0], [48.9, 783.0], [49.0, 783.0], [49.1, 784.0], [49.2, 784.0], [49.3, 784.0], [49.4, 787.0], [49.5, 788.0], [49.6, 788.0], [49.7, 788.0], [49.8, 788.0], [49.9, 790.0], [50.0, 790.0], [50.1, 790.0], [50.2, 791.0], [50.3, 791.0], [50.4, 791.0], [50.5, 792.0], [50.6, 792.0], [50.7, 792.0], [50.8, 794.0], [50.9, 794.0], [51.0, 795.0], [51.1, 795.0], [51.2, 795.0], [51.3, 795.0], [51.4, 795.0], [51.5, 796.0], [51.6, 796.0], [51.7, 797.0], [51.8, 797.0], [51.9, 797.0], [52.0, 798.0], [52.1, 799.0], [52.2, 800.0], [52.3, 801.0], [52.4, 801.0], [52.5, 801.0], [52.6, 802.0], [52.7, 803.0], [52.8, 805.0], [52.9, 805.0], [53.0, 805.0], [53.1, 806.0], [53.2, 807.0], [53.3, 807.0], [53.4, 808.0], [53.5, 808.0], [53.6, 811.0], [53.7, 812.0], [53.8, 813.0], [53.9, 814.0], [54.0, 815.0], [54.1, 816.0], [54.2, 816.0], [54.3, 817.0], [54.4, 817.0], [54.5, 817.0], [54.6, 817.0], [54.7, 818.0], [54.8, 818.0], [54.9, 819.0], [55.0, 820.0], [55.1, 821.0], [55.2, 821.0], [55.3, 822.0], [55.4, 823.0], [55.5, 825.0], [55.6, 825.0], [55.7, 825.0], [55.8, 825.0], [55.9, 825.0], [56.0, 825.0], [56.1, 826.0], [56.2, 828.0], [56.3, 829.0], [56.4, 831.0], [56.5, 832.0], [56.6, 833.0], [56.7, 834.0], [56.8, 836.0], [56.9, 836.0], [57.0, 837.0], [57.1, 839.0], [57.2, 840.0], [57.3, 841.0], [57.4, 842.0], [57.5, 842.0], [57.6, 844.0], [57.7, 844.0], [57.8, 849.0], [57.9, 850.0], [58.0, 850.0], [58.1, 850.0], [58.2, 853.0], [58.3, 853.0], [58.4, 853.0], [58.5, 854.0], [58.6, 854.0], [58.7, 856.0], [58.8, 858.0], [58.9, 858.0], [59.0, 859.0], [59.1, 859.0], [59.2, 861.0], [59.3, 863.0], [59.4, 864.0], [59.5, 865.0], [59.6, 865.0], [59.7, 865.0], [59.8, 865.0], [59.9, 867.0], [60.0, 867.0], [60.1, 868.0], [60.2, 869.0], [60.3, 870.0], [60.4, 870.0], [60.5, 870.0], [60.6, 871.0], [60.7, 871.0], [60.8, 872.0], [60.9, 873.0], [61.0, 873.0], [61.1, 874.0], [61.2, 875.0], [61.3, 875.0], [61.4, 875.0], [61.5, 876.0], [61.6, 877.0], [61.7, 877.0], [61.8, 877.0], [61.9, 877.0], [62.0, 878.0], [62.1, 878.0], [62.2, 878.0], [62.3, 879.0], [62.4, 880.0], [62.5, 880.0], [62.6, 880.0], [62.7, 881.0], [62.8, 882.0], [62.9, 882.0], [63.0, 883.0], [63.1, 885.0], [63.2, 886.0], [63.3, 886.0], [63.4, 887.0], [63.5, 887.0], [63.6, 887.0], [63.7, 889.0], [63.8, 890.0], [63.9, 891.0], [64.0, 893.0], [64.1, 895.0], [64.2, 896.0], [64.3, 900.0], [64.4, 902.0], [64.5, 906.0], [64.6, 906.0], [64.7, 907.0], [64.8, 908.0], [64.9, 909.0], [65.0, 909.0], [65.1, 909.0], [65.2, 909.0], [65.3, 910.0], [65.4, 911.0], [65.5, 911.0], [65.6, 915.0], [65.7, 916.0], [65.8, 916.0], [65.9, 917.0], [66.0, 918.0], [66.1, 919.0], [66.2, 920.0], [66.3, 921.0], [66.4, 921.0], [66.5, 921.0], [66.6, 923.0], [66.7, 923.0], [66.8, 923.0], [66.9, 924.0], [67.0, 924.0], [67.1, 925.0], [67.2, 925.0], [67.3, 925.0], [67.4, 926.0], [67.5, 927.0], [67.6, 928.0], [67.7, 928.0], [67.8, 932.0], [67.9, 933.0], [68.0, 934.0], [68.1, 934.0], [68.2, 934.0], [68.3, 935.0], [68.4, 935.0], [68.5, 938.0], [68.6, 940.0], [68.7, 941.0], [68.8, 941.0], [68.9, 941.0], [69.0, 943.0], [69.1, 944.0], [69.2, 946.0], [69.3, 946.0], [69.4, 947.0], [69.5, 948.0], [69.6, 948.0], [69.7, 950.0], [69.8, 955.0], [69.9, 955.0], [70.0, 955.0], [70.1, 956.0], [70.2, 957.0], [70.3, 959.0], [70.4, 959.0], [70.5, 961.0], [70.6, 962.0], [70.7, 962.0], [70.8, 964.0], [70.9, 964.0], [71.0, 964.0], [71.1, 966.0], [71.2, 968.0], [71.3, 968.0], [71.4, 969.0], [71.5, 971.0], [71.6, 972.0], [71.7, 973.0], [71.8, 974.0], [71.9, 974.0], [72.0, 975.0], [72.1, 975.0], [72.2, 976.0], [72.3, 976.0], [72.4, 976.0], [72.5, 977.0], [72.6, 977.0], [72.7, 977.0], [72.8, 977.0], [72.9, 978.0], [73.0, 978.0], [73.1, 978.0], [73.2, 980.0], [73.3, 981.0], [73.4, 984.0], [73.5, 985.0], [73.6, 985.0], [73.7, 986.0], [73.8, 986.0], [73.9, 986.0], [74.0, 986.0], [74.1, 987.0], [74.2, 987.0], [74.3, 989.0], [74.4, 990.0], [74.5, 991.0], [74.6, 991.0], [74.7, 991.0], [74.8, 991.0], [74.9, 992.0], [75.0, 992.0], [75.1, 992.0], [75.2, 993.0], [75.3, 995.0], [75.4, 996.0], [75.5, 996.0], [75.6, 997.0], [75.7, 997.0], [75.8, 997.0], [75.9, 997.0], [76.0, 999.0], [76.1, 1000.0], [76.2, 1000.0], [76.3, 1002.0], [76.4, 1003.0], [76.5, 1005.0], [76.6, 1006.0], [76.7, 1006.0], [76.8, 1009.0], [76.9, 1009.0], [77.0, 1010.0], [77.1, 1013.0], [77.2, 1014.0], [77.3, 1014.0], [77.4, 1017.0], [77.5, 1017.0], [77.6, 1017.0], [77.7, 1020.0], [77.8, 1020.0], [77.9, 1021.0], [78.0, 1021.0], [78.1, 1022.0], [78.2, 1022.0], [78.3, 1024.0], [78.4, 1025.0], [78.5, 1025.0], [78.6, 1025.0], [78.7, 1025.0], [78.8, 1028.0], [78.9, 1028.0], [79.0, 1030.0], [79.1, 1031.0], [79.2, 1031.0], [79.3, 1034.0], [79.4, 1035.0], [79.5, 1036.0], [79.6, 1037.0], [79.7, 1037.0], [79.8, 1038.0], [79.9, 1038.0], [80.0, 1042.0], [80.1, 1042.0], [80.2, 1042.0], [80.3, 1043.0], [80.4, 1045.0], [80.5, 1046.0], [80.6, 1046.0], [80.7, 1049.0], [80.8, 1053.0], [80.9, 1055.0], [81.0, 1055.0], [81.1, 1055.0], [81.2, 1058.0], [81.3, 1058.0], [81.4, 1062.0], [81.5, 1065.0], [81.6, 1066.0], [81.7, 1067.0], [81.8, 1068.0], [81.9, 1069.0], [82.0, 1070.0], [82.1, 1070.0], [82.2, 1072.0], [82.3, 1073.0], [82.4, 1073.0], [82.5, 1075.0], [82.6, 1076.0], [82.7, 1076.0], [82.8, 1077.0], [82.9, 1079.0], [83.0, 1079.0], [83.1, 1081.0], [83.2, 1082.0], [83.3, 1083.0], [83.4, 1083.0], [83.5, 1085.0], [83.6, 1087.0], [83.7, 1087.0], [83.8, 1088.0], [83.9, 1089.0], [84.0, 1089.0], [84.1, 1092.0], [84.2, 1093.0], [84.3, 1096.0], [84.4, 1097.0], [84.5, 1098.0], [84.6, 1099.0], [84.7, 1100.0], [84.8, 1101.0], [84.9, 1102.0], [85.0, 1103.0], [85.1, 1103.0], [85.2, 1104.0], [85.3, 1107.0], [85.4, 1107.0], [85.5, 1108.0], [85.6, 1108.0], [85.7, 1109.0], [85.8, 1110.0], [85.9, 1113.0], [86.0, 1114.0], [86.1, 1115.0], [86.2, 1116.0], [86.3, 1120.0], [86.4, 1121.0], [86.5, 1122.0], [86.6, 1123.0], [86.7, 1123.0], [86.8, 1123.0], [86.9, 1123.0], [87.0, 1128.0], [87.1, 1132.0], [87.2, 1133.0], [87.3, 1134.0], [87.4, 1138.0], [87.5, 1141.0], [87.6, 1141.0], [87.7, 1142.0], [87.8, 1142.0], [87.9, 1142.0], [88.0, 1145.0], [88.1, 1145.0], [88.2, 1145.0], [88.3, 1150.0], [88.4, 1154.0], [88.5, 1154.0], [88.6, 1156.0], [88.7, 1160.0], [88.8, 1161.0], [88.9, 1165.0], [89.0, 1168.0], [89.1, 1169.0], [89.2, 1170.0], [89.3, 1171.0], [89.4, 1171.0], [89.5, 1174.0], [89.6, 1175.0], [89.7, 1177.0], [89.8, 1178.0], [89.9, 1180.0], [90.0, 1182.0], [90.1, 1183.0], [90.2, 1184.0], [90.3, 1184.0], [90.4, 1184.0], [90.5, 1185.0], [90.6, 1185.0], [90.7, 1190.0], [90.8, 1190.0], [90.9, 1192.0], [91.0, 1193.0], [91.1, 1197.0], [91.2, 1197.0], [91.3, 1198.0], [91.4, 1199.0], [91.5, 1201.0], [91.6, 1208.0], [91.7, 1212.0], [91.8, 1214.0], [91.9, 1214.0], [92.0, 1215.0], [92.1, 1221.0], [92.2, 1223.0], [92.3, 1226.0], [92.4, 1230.0], [92.5, 1230.0], [92.6, 1232.0], [92.7, 1234.0], [92.8, 1235.0], [92.9, 1237.0], [93.0, 1237.0], [93.1, 1238.0], [93.2, 1239.0], [93.3, 1240.0], [93.4, 1242.0], [93.5, 1243.0], [93.6, 1245.0], [93.7, 1247.0], [93.8, 1250.0], [93.9, 1256.0], [94.0, 1258.0], [94.1, 1259.0], [94.2, 1261.0], [94.3, 1264.0], [94.4, 1265.0], [94.5, 1266.0], [94.6, 1266.0], [94.7, 1267.0], [94.8, 1268.0], [94.9, 1269.0], [95.0, 1284.0], [95.1, 1290.0], [95.2, 1291.0], [95.3, 1292.0], [95.4, 1300.0], [95.5, 1301.0], [95.6, 1309.0], [95.7, 1310.0], [95.8, 1318.0], [95.9, 1322.0], [96.0, 1323.0], [96.1, 1331.0], [96.2, 1332.0], [96.3, 1341.0], [96.4, 1343.0], [96.5, 1351.0], [96.6, 1353.0], [96.7, 1353.0], [96.8, 1360.0], [96.9, 1366.0], [97.0, 1376.0], [97.1, 1389.0], [97.2, 1394.0], [97.3, 1396.0], [97.4, 1398.0], [97.5, 1414.0], [97.6, 1425.0], [97.7, 1446.0], [97.8, 1448.0], [97.9, 1475.0], [98.0, 1476.0], [98.1, 1502.0], [98.2, 1508.0], [98.3, 1516.0], [98.4, 1516.0], [98.5, 1532.0], [98.6, 1540.0], [98.7, 1565.0], [98.8, 1591.0], [98.9, 1595.0], [99.0, 1619.0], [99.1, 1627.0], [99.2, 1630.0], [99.3, 1665.0], [99.4, 1844.0], [99.5, 1936.0], [99.6, 5756.0], [99.7, 6021.0], [99.8, 6022.0], [99.9, 6090.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 129.0, "series": [{"data": [[600.0, 113.0], [700.0, 129.0], [200.0, 25.0], [800.0, 121.0], [900.0, 118.0], [1000.0, 87.0], [1100.0, 68.0], [300.0, 39.0], [1200.0, 39.0], [1300.0, 21.0], [1400.0, 6.0], [5700.0, 1.0], [1500.0, 9.0], [6000.0, 3.0], [100.0, 2.0], [400.0, 96.0], [1600.0, 4.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 117.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 819.0, "series": [{"data": [[0.0, 162.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 819.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 134.74200000000016, "minX": 1.59101046E12, "maxY": 134.74200000000016, "series": [{"data": [[1.59101046E12, 134.74200000000016]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 360.25, "minX": 1.0, "maxY": 6090.0, "series": [{"data": [[2.0, 1049.0], [3.0, 6090.0], [4.0, 1025.0], [5.0, 1174.0], [6.0, 1021.0], [7.0, 1042.0], [8.0, 1021.0], [9.0, 1025.0], [10.0, 1066.0], [11.0, 1038.0], [12.0, 5756.0], [13.0, 6022.0], [14.0, 6021.0], [15.0, 882.0], [16.0, 1073.0], [17.0, 1059.0], [18.0, 1123.0], [19.0, 868.0], [20.0, 918.0], [21.0, 1030.0], [22.0, 1020.0], [23.0, 867.0], [24.0, 861.0], [25.0, 881.0], [26.0, 829.0], [27.0, 825.0], [28.0, 878.0], [29.0, 817.0], [30.0, 859.0], [31.0, 911.0], [33.0, 916.0], [32.0, 1013.0], [35.0, 880.0], [34.0, 1053.0], [37.0, 1269.0], [39.0, 973.0], [38.0, 1098.0], [41.0, 1067.0], [40.0, 780.0], [43.0, 1087.0], [42.0, 975.0], [45.0, 1099.0], [44.0, 772.0], [47.0, 828.5], [49.0, 756.0], [48.0, 807.0], [51.0, 792.0], [50.0, 805.0], [53.0, 717.0], [52.0, 820.0], [55.0, 1104.0], [54.0, 1142.0], [57.0, 1123.0], [56.0, 1000.0], [59.0, 886.0], [58.0, 1154.0], [61.0, 874.0], [60.0, 1182.0], [63.0, 928.0], [62.0, 924.0], [67.0, 1121.0], [66.0, 1076.0], [65.0, 784.0], [64.0, 821.0], [71.0, 794.0], [70.0, 896.0], [69.0, 978.0], [68.0, 773.0], [75.0, 882.0], [74.0, 1076.0], [73.0, 909.0], [72.0, 1114.0], [79.0, 626.6666666666667], [78.0, 812.0], [77.0, 964.0], [76.0, 1055.0], [83.0, 904.0], [82.0, 790.0], [81.0, 619.4], [80.0, 463.2], [87.0, 542.5], [86.0, 615.5], [85.0, 660.3333333333334], [84.0, 752.0], [91.0, 809.0], [90.0, 556.6666666666666], [89.0, 563.0], [88.0, 770.0], [95.0, 564.6363636363636], [94.0, 552.8], [93.0, 751.5], [92.0, 533.7142857142857], [96.0, 360.25], [99.0, 651.1538461538461], [98.0, 580.9333333333333], [97.0, 609.7142857142857], [102.0, 513.5], [100.0, 506.5000000000001], [101.0, 593.9583333333335], [103.0, 610.5], [105.0, 499.53846153846155], [104.0, 510.8181818181818], [107.0, 561.875], [106.0, 565.8333333333334], [108.0, 553.0], [111.0, 549.5], [110.0, 591.8333333333334], [109.0, 668.5], [112.0, 589.0], [114.0, 925.75], [115.0, 681.3333333333334], [113.0, 783.0], [116.0, 597.6666666666666], [119.0, 1017.0], [118.0, 614.75], [117.0, 687.0], [123.0, 1233.0], [122.0, 1183.0], [121.0, 1214.0], [120.0, 773.0], [124.0, 652.4444444444445], [127.0, 773.75], [126.0, 635.2222222222222], [125.0, 634.8571428571428], [131.0, 664.2666666666667], [130.0, 691.9166666666666], [132.0, 719.4375], [129.0, 779.6666666666666], [128.0, 828.25], [134.0, 698.8571428571428], [133.0, 708.1111111111111], [135.0, 735.5555555555555], [138.0, 778.0714285714287], [137.0, 726.9473684210527], [136.0, 674.1250000000001], [139.0, 719.0], [142.0, 724.0], [141.0, 740.2], [140.0, 753.8571428571429], [143.0, 848.5], [144.0, 832.5], [149.0, 840.5714285714286], [148.0, 845.1111111111111], [147.0, 807.1818181818181], [151.0, 1008.0], [150.0, 835.5], [146.0, 773.8], [145.0, 925.5], [154.0, 874.5], [159.0, 867.5], [158.0, 920.0], [157.0, 1565.0], [156.0, 909.0], [155.0, 825.0], [153.0, 1284.0], [167.0, 932.1666666666666], [166.0, 847.3333333333333], [165.0, 914.0], [164.0, 976.5], [163.0, 833.3333333333334], [162.0, 845.3333333333334], [161.0, 983.25], [160.0, 879.0], [175.0, 826.75], [174.0, 1004.5], [173.0, 917.5], [172.0, 798.25], [171.0, 907.5], [170.0, 892.0000000000001], [169.0, 851.3750000000001], [168.0, 866.1428571428571], [183.0, 844.1111111111111], [182.0, 908.8888888888889], [181.0, 833.2], [180.0, 858.1666666666667], [179.0, 1027.3333333333333], [178.0, 1192.5], [177.0, 954.0], [176.0, 785.7142857142857], [184.0, 991.3333333333334], [191.0, 961.2222222222223], [190.0, 948.8571428571429], [189.0, 1036.4166666666667], [188.0, 911.1818181818181], [187.0, 1109.5555555555557], [186.0, 1077.3333333333333], [185.0, 945.3333333333334], [199.0, 1049.0], [198.0, 1013.45], [197.0, 1052.2777777777778], [196.0, 1009.5333333333333], [195.0, 1027.157894736842], [194.0, 1043.0000000000002], [193.0, 1032.6], [192.0, 1012.3529411764706], [200.0, 1018.8461538461536], [204.0, 1095.0], [203.0, 1042.5], [202.0, 1048.25], [201.0, 1096.1666666666667], [1.0, 1046.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[134.74200000000016, 817.3600000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 204.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3350.0, "minX": 1.59101046E12, "maxY": 4300.0, "series": [{"data": [[1.59101046E12, 3350.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59101046E12, 4300.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 817.3600000000007, "minX": 1.59101046E12, "maxY": 817.3600000000007, "series": [{"data": [[1.59101046E12, 817.3600000000007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 817.3029999999999, "minX": 1.59101046E12, "maxY": 817.3029999999999, "series": [{"data": [[1.59101046E12, 817.3029999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 21.42300000000001, "minX": 1.59101046E12, "maxY": 21.42300000000001, "series": [{"data": [[1.59101046E12, 21.42300000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.59101046E12, "maxY": 6090.0, "series": [{"data": [[1.59101046E12, 6090.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59101046E12, 241.02699928402902]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59101046E12, 243.7297002863884]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59101046E12, 242.5284996420145]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59101046E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59101046E12, 790.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 469.0, "minX": 11.0, "maxY": 1054.0, "series": [{"data": [[131.0, 469.0], [157.0, 997.0], [160.0, 513.0], [161.0, 815.0], [170.0, 655.5], [11.0, 1042.0], [210.0, 1054.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 210.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 469.0, "minX": 11.0, "maxY": 1053.5, "series": [{"data": [[131.0, 469.0], [157.0, 997.0], [160.0, 513.0], [161.0, 815.0], [170.0, 655.5], [11.0, 1042.0], [210.0, 1053.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 210.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59101046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.59101046E12, "maxY": 16.666666666666668, "series": [{"data": [[1.59101046E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59101046E12, "title": "Total Transactions Per Second"}},
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

