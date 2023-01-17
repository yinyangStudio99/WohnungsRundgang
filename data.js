var APP_DATA = {
  "scenes": [
    {
      "id": "0-01_wohnungseingang",
      "name": "01_WohnungsEingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4151635844508341,
          "pitch": -0.006223393299769953,
          "rotation": 0,
          "target": "1-02_arbeitszimmer"
        },
        {
          "yaw": 2.022754996792983,
          "pitch": -0.0009011334011113092,
          "rotation": 0,
          "target": "2-03_wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_arbeitszimmer",
      "name": "02_Arbeitszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3624618106187558,
          "pitch": -0.002382368406447455,
          "rotation": 0,
          "target": "0-01_wohnungseingang"
        },
        {
          "yaw": -1.897504319952695,
          "pitch": -0.012354997904743925,
          "rotation": 0,
          "target": "2-03_wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03_wohnzimmer",
      "name": "03_Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5853930887173,
          "pitch": 0.005249609248004106,
          "rotation": 0,
          "target": "1-02_arbeitszimmer"
        },
        {
          "yaw": -2.210727104716746,
          "pitch": 0.005205801916455144,
          "rotation": 0,
          "target": "3-04_flur_eg"
        },
        {
          "yaw": -1.1729241815555405,
          "pitch": -0.0540302110065376,
          "rotation": 0,
          "target": "0-01_wohnungseingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04_flur_eg",
      "name": "04_Flur_EG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4988495115086735,
          "pitch": 0.005530748904645222,
          "rotation": 0,
          "target": "2-03_wohnzimmer"
        },
        {
          "yaw": 1.656185565701441,
          "pitch": 0.01916669209664157,
          "rotation": 0,
          "target": "4-05_kueche"
        },
        {
          "yaw": 0.41115782591813144,
          "pitch": -0.4431613682753994,
          "rotation": 0,
          "target": "5-06_treppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05_kueche",
      "name": "05_Kueche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.365805010455823,
          "pitch": -0.020330310311949873,
          "rotation": 0,
          "target": "3-04_flur_eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06_treppe",
      "name": "06_Treppe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6503633017735417,
          "pitch": 0.688952745001,
          "rotation": 0,
          "target": "3-04_flur_eg"
        },
        {
          "yaw": -0.7922848647613829,
          "pitch": 0.6788591236551227,
          "rotation": 0,
          "target": "2-03_wohnzimmer"
        },
        {
          "yaw": -0.2948300006864546,
          "pitch": -0.529767439065818,
          "rotation": 0,
          "target": "6-07_flur_k01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-07_flur_k01",
      "name": "07_Flur_K01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0737152003150925,
          "pitch": 0.009736728656468685,
          "rotation": 0,
          "target": "7-08_badzimmer"
        },
        {
          "yaw": -0.07692248511963307,
          "pitch": 0.0027964982477470812,
          "rotation": 0,
          "target": "8-09_flur_k02"
        },
        {
          "yaw": -1.3428429544957705,
          "pitch": 0.5807423453515455,
          "rotation": 0,
          "target": "5-06_treppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-08_badzimmer",
      "name": "08_Badzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5012877499259112,
          "pitch": 0.0351229237251971,
          "rotation": 0,
          "target": "6-07_flur_k01"
        },
        {
          "yaw": -1.4947986326482159,
          "pitch": 0.4483417356068049,
          "rotation": 0,
          "target": "5-06_treppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-09_flur_k02",
      "name": "09_Flur_K02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.30133095811992483,
          "pitch": 0.017632368996503445,
          "rotation": 0,
          "target": "9-10_kinderzimmer"
        },
        {
          "yaw": 1.5841924827261842,
          "pitch": 0.014725273376193115,
          "rotation": 0,
          "target": "6-07_flur_k01"
        },
        {
          "yaw": -1.6995143192647397,
          "pitch": 0.006342922290448527,
          "rotation": 0,
          "target": "10-11_schalfzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10_kinderzimmer",
      "name": "10_Kinderzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6650148630427113,
          "pitch": 0.0420961106866109,
          "rotation": 0,
          "target": "8-09_flur_k02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11_schalfzimmer",
      "name": "11_Schalfzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0182820654993687,
          "pitch": 0.05026351717868138,
          "rotation": 0,
          "target": "8-09_flur_k02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
