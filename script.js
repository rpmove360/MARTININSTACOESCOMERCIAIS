(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69,this.mainPlayList]); this.playAudioList([this.audio_4D93A267_5801_8042_41D2_CCC7C3CB6FBB])",
 "vrPolyfillScale": 0.7,
 "children": [
  "this.MainViewer",
  {
   "layout": "horizontal",
   "children": [
    {
     "itemThumbnailScaleMode": "fit_outside",
     "layout": "horizontal",
     "selectedItemLabelFontWeight": "bold",
     "maxHeight": 600,
     "maxWidth": 800,
     "scrollBarWidth": 10,
     "itemLabelFontColor": "#FFFFFF",
     "itemThumbnailShadowSpread": 1,
     "backgroundOpacity": 0.2,
     "itemThumbnailShadow": true,
     "playList": "this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69",
     "paddingBottom": 10,
     "itemBackgroundOpacity": 0,
     "itemLabelGap": 5,
     "borderRadius": 5,
     "itemBackgroundColorDirection": "vertical",
     "paddingRight": 20,
     "verticalAlign": "top",
     "itemPaddingTop": 3,
     "paddingLeft": 20,
     "borderSize": 0,
     "itemBackgroundColor": [],
     "minHeight": 0,
     "propagateClick": false,
     "itemThumbnailShadowColor": "#000000",
     "itemBackgroundColorRatios": [],
     "backgroundColorRatios": [
      0
     ],
     "itemPaddingBottom": 3,
     "itemThumbnailHeight": 75,
     "itemThumbnailBorderRadius": 5,
     "scrollBarColor": "#FFFFFF",
     "horizontalAlign": "left",
     "minWidth": 0,
     "itemLabelFontStyle": "normal",
     "itemThumbnailOpacity": 1,
     "itemOpacity": 1,
     "scrollBarVisible": "rollOver",
     "itemLabelHorizontalAlign": "center",
     "itemMode": "normal",
     "gap": 10,
     "backgroundColor": [
      "#000000"
     ],
     "class": "ThumbnailList",
     "backgroundColorDirection": "vertical",
     "itemPaddingRight": 3,
     "scrollBarOpacity": 0.5,
     "itemLabelFontFamily": "Arial",
     "itemLabelFontWeight": "normal",
     "scrollBarMargin": 2,
     "itemThumbnailWidth": 100,
     "itemThumbnailShadowBlurRadius": 4,
     "itemLabelTextDecoration": "none",
     "paddingTop": 10,
     "shadow": false,
     "itemVerticalAlign": "middle",
     "itemLabelFontSize": 14,
     "itemThumbnailShadowHorizontalLength": 3,
     "itemHorizontalAlign": "center",
     "itemThumbnailShadowVerticalLength": 3,
     "itemBorderRadius": 0,
     "itemThumbnailShadowOpacity": 0.8,
     "data": {
      "name": "ThumbnailList515"
     },
     "itemPaddingLeft": 3,
     "itemLabelPosition": "bottom"
    }
   ],
   "scrollBarWidth": 10,
   "left": 0,
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "borderRadius": 0,
   "paddingRight": 0,
   "right": 0,
   "overflow": "visible",
   "paddingLeft": 0,
   "borderSize": 0,
   "minHeight": 20,
   "propagateClick": false,
   "bottom": 0,
   "verticalAlign": "bottom",
   "scrollBarColor": "#000000",
   "horizontalAlign": "center",
   "minWidth": 20,
   "height": 200,
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "class": "Container",
   "scrollBarMargin": 2,
   "scrollBarOpacity": 0.5,
   "contentOpaque": false,
   "paddingTop": 0,
   "data": {
    "name": "Container514"
   },
   "shadow": false
  }
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "initialPosition": {
  "hfov": 130,
  "yaw": -99.32,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4101F8FF_5800_8042_41C0_612C6DA44D6A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -11.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_414C793E_5800_81C2_41CE_C20391C6047E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -15.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_400F77A8_5800_80CE_41D4_CD0A1CEFEA22",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5253596F_5803_8042_41C6_28C8D301C84C_camera",
 "class": "PanoramaCamera"
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -103,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40593854_5800_8046_41C8_2CB1B06C094E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -108.32,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4142E93E_5800_81C2_41B6_C4C1B96BA704",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 94.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40950892_5800_80C2_41AF_C357B2215558",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 149.82,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4161E91F_5800_81C2_41D3_AD3A67828FB4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52537276_5803_8042_41C4_EF4331261097_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -86.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40F588B1_5800_80DE_41B4_2610E908274C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 94.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_408B8882_5800_80C2_41B6_E2DBD6D50EB3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_48FE2AFB_5801_8042_41BB_F2B000357ADA",
  "this.overlay_4914BDBA_5801_80C2_41CC_126CFB090E25",
  "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_tcap0"
 ],
 "label": "SAM_100_0074",
 "id": "panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C",
 "thumbnailUrl": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 138.37,
   "panorama": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6",
   "yaw": -93.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -30.18,
   "panorama": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5",
   "yaw": 164.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_57D201AD_5801_80C6_41B1_1070DB62FB43",
  "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0"
 ],
 "label": "SAM_100_0071",
 "id": "panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326",
 "thumbnailUrl": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "120%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -160.68,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": -1.13,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4860069F_5800_80C2_41BD_C7BF1FBAD7FE",
  "this.overlay_489E89AD_5800_80C6_41BB_BE823A2AF4AF",
  "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_tcap0"
 ],
 "label": "SAM_100_0073",
 "id": "panorama_5250CE56_5800_8042_41C1_9520B89DE9B5",
 "thumbnailUrl": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 164.96,
   "panorama": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C",
   "yaw": -30.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 85.59,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": -30.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 85.59,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": 162.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 85.59,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": 162.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetHfov": 130,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "id": "panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 7.46,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40A94863_5800_8042_41A7_9AE6DD754048",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -94.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_401DF7E6_5800_8042_41C0_D0DC2DF247EC",
 "class": "PanoramaCamera"
},
{
 "audio": {
  "mp3Url": "media/audio_4D93A267_5801_8042_41D2_CCC7C3CB6FBB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_4D93A267_5801_8042_41D2_CCC7C3CB6FBB.ogg"
 },
 "id": "audio_4D93A267_5801_8042_41D2_CCC7C3CB6FBB",
 "autoplay": true,
 "data": {
  "label": "Bruno marz - Lazy SonG"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_480FD246_5800_8042_41CD_8CC80618FA6C",
  "this.overlay_482235FF_5800_8042_4181_275FE02C77FC",
  "this.overlay_4CFCF8BC_5800_80C6_41B5_951A996E8C81",
  "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_tcap0"
 ],
 "label": "SAM_100_0072",
 "id": "panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
 "thumbnailUrl": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "100%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -30.18,
   "panorama": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5",
   "yaw": 85.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -88.68,
   "panorama": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A",
   "yaw": -85.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -1.13,
   "panorama": "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326",
   "yaw": -160.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 92.96,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4173192E_5800_81C2_41AF_DFDF8BAE021B",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "camera": "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_camera",
   "media": "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_camera",
   "media": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_camera",
   "media": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_camera",
   "media": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6_camera",
   "media": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C_camera",
   "media": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698_camera",
   "media": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52537276_5803_8042_41C4_EF4331261097_camera",
   "media": "this.panorama_52537276_5803_8042_41C4_EF4331261097",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131_camera",
   "media": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_camera",
   "media": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_camera",
   "media": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 91.32,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40D6D8D1_5800_805E_41D1_DE4EF765BE4D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 86.82,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_413078F0_5800_805E_41C5_CC521415B81A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4C3159B3_5801_80C2_41CB_F482D42D7204",
  "this.overlay_4C2E9CA1_5801_80FE_41A9_77C2868B298B",
  "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_tcap0"
 ],
 "label": "SAM_100_0080",
 "id": "panorama_52531737_5803_81C2_41CC_56ABCBFBBC37",
 "thumbnailUrl": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.54,
   "panorama": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131",
   "yaw": 77,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 94.18,
   "panorama": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A",
   "yaw": -172.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 92.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_404F2844_5800_8046_41B5_7290BD13FB0C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "camera": "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_camera",
   "media": "this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_camera",
   "media": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_camera",
   "media": "this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_camera",
   "media": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6_camera",
   "media": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C_camera",
   "media": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698_camera",
   "media": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52537276_5803_8042_41C4_EF4331261097_camera",
   "media": "this.panorama_52537276_5803_8042_41C4_EF4331261097",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131_camera",
   "media": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_camera",
   "media": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_camera",
   "media": "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A",
   "begin": "this.setEndToItemIndex(this.playList_55CCE048_5807_804E_41A5_15BC4F30FE69, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "playList_55CCE048_5807_804E_41A5_15BC4F30FE69",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 103.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40E558A2_5800_80C2_41AD_15A4FE2B5E00",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4A7E0AFA_5801_8042_41C9_F52CF2FF338F",
  "this.overlay_4A979E07_5801_83C2_41A8_9F2BADE8A57E",
  "this.panorama_5253668E_5803_80C2_41C7_B61E52307698_tcap0"
 ],
 "label": "SAM_100_0077",
 "id": "panorama_5253668E_5803_80C2_41C7_B61E52307698",
 "thumbnailUrl": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -76.41,
   "panorama": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C",
   "yaw": 71.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 93.57,
   "panorama": "this.panorama_52537276_5803_8042_41C4_EF4331261097",
   "yaw": -98.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -41.63,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4112190F_5800_81C2_41D1_E5ECDA5011D0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 81.09,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_415C794E_5800_8042_41A0_7EB09F4B2482",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 178.87,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_412088E0_5800_807E_41D1_44FA1F006915",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4A14AA2A_5800_83C2_41A7_5A0ACEDC3100",
  "this.overlay_4A00BCF9_5800_804E_41C6_195455924C58",
  "this.panorama_525314DC_5803_8046_419E_0DD976856EA6_tcap0"
 ],
 "label": "SAM_100_0075",
 "id": "panorama_525314DC_5803_8046_419E_0DD976856EA6",
 "thumbnailUrl": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.18,
   "panorama": "this.panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C",
   "yaw": 138.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 80.68,
   "panorama": "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C",
   "yaw": -87.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52537276_5803_8042_41C4_EF4331261097_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4AF77DA9_5800_80CE_41D2_9D1C3F005F2E",
  "this.overlay_4AED3FAD_5800_80C7_41B8_A957A0EE49ED",
  "this.panorama_52537276_5803_8042_41C4_EF4331261097_tcap0"
 ],
 "label": "SAM_100_0078",
 "id": "panorama_52537276_5803_8042_41C4_EF4331261097",
 "thumbnailUrl": "media/panorama_52537276_5803_8042_41C4_EF4331261097_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 168.23,
   "panorama": "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131",
   "yaw": -87.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -98.91,
   "panorama": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698",
   "yaw": 93.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_49CD6536_5800_81C2_41C1_1CC21A1D25D6",
  "this.overlay_49E69824_5800_8FC6_41CC_C8CBF31A68C6",
  "this.panorama_5253596F_5803_8042_41C6_28C8D301C84C_tcap0"
 ],
 "label": "SAM_100_0076",
 "id": "panorama_5253596F_5803_8042_41C6_28C8D301C84C",
 "thumbnailUrl": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.04,
   "panorama": "this.panorama_525314DC_5803_8046_419E_0DD976856EA6",
   "yaw": 80.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 71.68,
   "panorama": "this.panorama_5253668E_5803_80C2_41C7_B61E52307698",
   "yaw": -76.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 94.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40BB0873_5800_8042_41BF_E94B4F147376",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52535CC6_5803_8042_41D0_A65D3F072131_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5253668E_5803_80C2_41C7_B61E52307698_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 19.32,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_41AC295D_5800_8046_41B4_5392B4A75238",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 149.82,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_40C6E8C1_5800_80BE_41C9_5FFDEABEC46F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -94.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_406B4805_5800_8FC6_41D0_93C37F7E00D2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_525314DC_5803_8046_419E_0DD976856EA6_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4BB2BA7A_5800_8042_41D1_70FD2741FF5E",
  "this.overlay_4BAB3D39_5800_81CE_41C9_E108F178A8BE",
  "this.panorama_52535CC6_5803_8042_41D0_A65D3F072131_tcap0"
 ],
 "label": "SAM_100_0079",
 "id": "panorama_52535CC6_5803_8042_41D0_A65D3F072131",
 "thumbnailUrl": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -87.86,
   "panorama": "this.panorama_52537276_5803_8042_41C4_EF4331261097",
   "yaw": 168.23,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 77,
   "panorama": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37",
   "yaw": -82.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": 97.46,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4071D815_5800_8FC6_4189_D7DD7824658C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -85.82,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_407E3834_5800_8FC6_41A4_753F797E8168",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4C2BFE19_5800_83CE_41D3_71AE5B5F71F1",
  "this.overlay_4C4340C9_580F_804E_41B2_D965209CC8FD",
  "this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_tcap0"
 ],
 "label": "SAM_100_0081",
 "id": "panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A",
 "thumbnailUrl": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.54,
   "panorama": "this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37",
   "yaw": 94.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -85.82,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": -88.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -85.82,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": -88.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -85.82,
   "panorama": "this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153",
   "yaw": 94.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "partial": false,
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 130,
  "yaw": -94.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_401657C7_5800_8042_41B5_26687D37A587",
 "class": "PanoramaCamera"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -93.18,
   "hfov": 16.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA90C6C_5807_8046_41D1_D6E70DBA6FE0",
   "yaw": -93.18,
   "pitch": -7.98,
   "distance": 100,
   "hfov": 16.39
  }
 ],
 "id": "overlay_48FE2AFB_5801_8042_41BB_F2B000357ADA",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 164.96,
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA95C6C_5807_8046_41B3_99E76FEBAB0C",
   "yaw": 164.96,
   "pitch": -8.8,
   "distance": 100,
   "hfov": 16.35
  }
 ],
 "id": "overlay_4914BDBA_5801_80C2_41CC_126CFB090E25",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153, this.camera_41AC295D_5800_8046_41B4_5392B4A75238); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -1.13,
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAE0C6C_5807_8046_41CA_7741CDFB18A0",
   "yaw": -1.13,
   "pitch": -0.61,
   "distance": 100,
   "hfov": 16.55
  }
 ],
 "id": "overlay_57D201AD_5801_80C6_41B1_1070DB62FB43",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153, this.camera_401657C7_5800_8042_41B5_26687D37A587); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -30.18,
   "hfov": 16.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA8AC6C_5807_8046_41AC_C520837DC334",
   "yaw": -30.18,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 16.41
  }
 ],
 "id": "overlay_4860069F_5800_80C2_41BD_C7BF1FBAD7FE",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153, this.camera_406B4805_5800_8FC6_41D0_93C37F7E00D2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 162.09,
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_1_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA8DC6C_5807_8046_41CD_69D6D8ED7CB0",
   "yaw": 162.09,
   "pitch": -8.8,
   "distance": 100,
   "hfov": 16.35
  }
 ],
 "id": "overlay_489E89AD_5800_80C6_41BB_BE823A2AF4AF",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A, this.camera_40D6D8D1_5800_805E_41D1_DE4EF765BE4D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -85.82,
   "hfov": 16.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAFFC6C_5807_8046_41C8_B53F4A6CE8F5",
   "yaw": -85.82,
   "pitch": -7.16,
   "distance": 100,
   "hfov": 16.42
  }
 ],
 "id": "overlay_480FD246_5800_8042_41CD_8CC80618FA6C",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5250CE56_5800_8042_41C1_9520B89DE9B5, this.camera_40C6E8C1_5800_80BE_41C9_5FFDEABEC46F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 85.59,
   "hfov": 16.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA83C6C_5807_8046_41D2_0CB735C3573E",
   "yaw": 85.59,
   "pitch": -7.98,
   "distance": 100,
   "hfov": 16.39
  }
 ],
 "id": "overlay_482235FF_5800_8042_4181_275FE02C77FC",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326, this.camera_412088E0_5800_807E_41D1_44FA1F006915); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -160.68,
   "hfov": 16.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA85C6C_5807_8046_41BA_13C117D04D7C",
   "yaw": -160.68,
   "pitch": -10.43,
   "distance": 100,
   "hfov": 16.28
  }
 ],
 "id": "overlay_4CFCF8BC_5800_80C6_41B5_951A996E8C81",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -172.54,
   "hfov": 16.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA4BC6C_5807_8046_41CB_BDDB4BB25C07",
   "yaw": -172.54,
   "pitch": -9.2,
   "distance": 100,
   "hfov": 16.34
  }
 ],
 "id": "overlay_4C3159B3_5801_80C2_41CB_F482D42D7204",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 77,
   "hfov": 16.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA4FC6C_5807_8046_41C7_32050B2CB307",
   "yaw": 77,
   "pitch": -1.84,
   "distance": 100,
   "hfov": 16.54
  }
 ],
 "id": "overlay_4C2E9CA1_5801_80FE_41A9_77C2868B298B",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -98.91,
   "hfov": 16.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAAFC6C_5807_8046_41C4_A564AD022AC4",
   "yaw": -98.91,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 16.41
  }
 ],
 "id": "overlay_4A7E0AFA_5801_8042_41C9_F52CF2FF338F",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 71.68,
   "hfov": 16.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAB2C6C_5807_8046_41BF_1C2175516158",
   "yaw": 71.68,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 16.41
  }
 ],
 "id": "overlay_4A979E07_5801_83C2_41A8_9F2BADE8A57E",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5253668E_5803_80C2_41C7_B61E52307698_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -87.04,
   "hfov": 16.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA99C6C_5807_8046_41CB_FBED76C545DF",
   "yaw": -87.04,
   "pitch": -10.43,
   "distance": 100,
   "hfov": 16.28
  }
 ],
 "id": "overlay_4A14AA2A_5800_83C2_41A7_5A0ACEDC3100",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 138.37,
   "hfov": 16.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_1_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA9DC6C_5807_8046_41D0_42527737FD0B",
   "yaw": 138.37,
   "pitch": -7.16,
   "distance": 100,
   "hfov": 16.42
  }
 ],
 "id": "overlay_4A00BCF9_5800_804E_41C6_195455924C58",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_525314DC_5803_8046_419E_0DD976856EA6_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -87.86,
   "hfov": 16.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAB6C6C_5807_8046_41C5_CCD0ABBCCD09",
   "yaw": -87.86,
   "pitch": -5.52,
   "distance": 100,
   "hfov": 16.47
  }
 ],
 "id": "overlay_4AF77DA9_5800_80CE_41D2_9D1C3F005F2E",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 93.57,
   "hfov": 16.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAB9C6C_5807_8046_41D0_F08A9091C294",
   "yaw": 93.57,
   "pitch": -7.16,
   "distance": 100,
   "hfov": 16.01
  }
 ],
 "id": "overlay_4AED3FAD_5800_80C7_41B8_A957A0EE49ED",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_52537276_5803_8042_41C4_EF4331261097_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -76.41,
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAA0C6C_5807_8046_41D0_D174DEC9C5E1",
   "yaw": -76.41,
   "pitch": -8.8,
   "distance": 100,
   "hfov": 16.35
  }
 ],
 "id": "overlay_49CD6536_5800_81C2_41C1_1CC21A1D25D6",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 80.68,
   "hfov": 16.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CAABC6C_5807_8046_41CA_F899E0564204",
   "yaw": 80.68,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 16.41
  }
 ],
 "id": "overlay_49E69824_5800_8FC6_41CC_C8CBF31A68C6",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5253596F_5803_8042_41C6_28C8D301C84C_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_52531737_5803_81C2_41CC_56ABCBFBBC37, this.camera_40593854_5800_8046_41C8_2CB1B06C094E); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -82.54,
   "hfov": 16.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CABDC6C_5807_8046_41D3_6980A4437583",
   "yaw": -82.54,
   "pitch": -5.11,
   "distance": 100,
   "hfov": 16.48
  }
 ],
 "id": "overlay_4BB2BA7A_5800_8042_41D1_70FD2741FF5E",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_52537276_5803_8042_41C4_EF4331261097, this.camera_404F2844_5800_8046_41B5_7290BD13FB0C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 168.23,
   "hfov": 16.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA40C6C_5807_8046_41B3_D0A5B9C88927",
   "yaw": 168.23,
   "pitch": -4.3,
   "distance": 100,
   "hfov": 16.5
  }
 ],
 "id": "overlay_4BAB3D39_5800_81CE_41C9_E108F178A8BE",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_52535CC6_5803_8042_41D0_A65D3F072131_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153, this.camera_408B8882_5800_80C2_41B6_E2DBD6D50EB3); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -88.68,
   "hfov": 16.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_1_HS_0_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA51C6C_5807_8046_41D5_D532E298A4BC",
   "yaw": -88.68,
   "pitch": -7.57,
   "distance": 100,
   "hfov": 16.41
  }
 ],
 "id": "overlay_4C2BFE19_5800_83CE_41D3_71AE5B5F71F1",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5255B379_5800_804E_41D1_FDDDAFCA7153, this.camera_40950892_5800_80C2_41AF_C357B2215558); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 94.18,
   "hfov": 16.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_1_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CA56C6C_5807_8046_41BD_16231B3D5709",
   "yaw": 94.18,
   "pitch": -5.93,
   "distance": 100,
   "hfov": 16.46
  }
 ],
 "id": "overlay_4C4340C9_580F_804E_41B2_D965209CC8FD",
 "data": {
  "label": "Arrow 05c"
 },
 "rollOverDisplay": false
},
{
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_tcap0.jpg",
    "width": 250,
    "height": 250,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_tcap0",
 "distance": 50,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA90C6C_5807_8046_41D1_D6E70DBA6FE0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5250C934_5800_81C6_41D3_F5E1A98E1D8C_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA95C6C_5807_8046_41B3_99E76FEBAB0C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_528AC83F_5800_8FC2_418C_5DB9FE46A326_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAE0C6C_5807_8046_41CA_7741CDFB18A0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA8AC6C_5807_8046_41AC_C520837DC334",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5250CE56_5800_8042_41C1_9520B89DE9B5_1_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA8DC6C_5807_8046_41CD_69D6D8ED7CB0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAFFC6C_5807_8046_41C8_B53F4A6CE8F5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA83C6C_5807_8046_41D2_0CB735C3573E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5255B379_5800_804E_41D1_FDDDAFCA7153_1_HS_2_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA85C6C_5807_8046_41BA_13C117D04D7C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA4BC6C_5807_8046_41CB_BDDB4BB25C07",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52531737_5803_81C2_41CC_56ABCBFBBC37_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA4FC6C_5807_8046_41C7_32050B2CB307",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAAFC6C_5807_8046_41C4_A564AD022AC4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253668E_5803_80C2_41C7_B61E52307698_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAB2C6C_5807_8046_41BF_1C2175516158",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA99C6C_5807_8046_41CB_FBED76C545DF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_525314DC_5803_8046_419E_0DD976856EA6_1_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA9DC6C_5807_8046_41D0_42527737FD0B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAB6C6C_5807_8046_41C5_CCD0ABBCCD09",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52537276_5803_8042_41C4_EF4331261097_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAB9C6C_5807_8046_41D0_F08A9091C294",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAA0C6C_5807_8046_41D0_D174DEC9C5E1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253596F_5803_8042_41C6_28C8D301C84C_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CAABC6C_5807_8046_41CA_F899E0564204",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CABDC6C_5807_8046_41D3_6980A4437583",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52535CC6_5803_8042_41D0_A65D3F072131_0_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA40C6C_5807_8046_41B3_D0A5B9C88927",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_1_HS_0_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA51C6C_5807_8046_41D5_D532E298A4BC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5253C1D6_5803_8042_41CD_76DE93B0CC9A_1_HS_1_0.png",
   "width": 480,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CA56C6C_5807_8046_41BD_16231B3D5709",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Player",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player512"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
