import a52q from '../assets/devices/a52q.png'
import cheeseburger from '../assets/devices/cheeseburger.png'
import guacamole from '../assets/devices/guacamole.png'
import Pong from '../assets/devices/Pong.png'
import rosemary from '../assets/devices/rosemary.png'
import Spacewar from '../assets/devices/Spacewar.png'

export const devices = {
  Spacewar:{
    name: "Nothing Phone (1)",
    maintainer: "Simao Gomes Viana (superboringdev/xdevs23)",
    cameraType: "dual",
    image: Spacewar,
    launch: "2022",
    isBootImageNeeded: true,
    isVendorBootImageNeeded: true,
    isRecoveryImageNeeded: false,
    display:{
        type: "OLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 1200 nits (peak)",
        size: "6.55\"",
        resolution: "1080 x 2400 pixels"
    },
    platform:{
        chipset: "Qualcomm SM7325-AE Snapdragon 778G+ 5G",
        cpu: "Octa-core (1x2.5 GHz Cortex-A78 & 3x2.4 GHz Cortex-A78 & 4x1.9 GHz Cortex-A55)",
        gpu: "Adreno 642L"
    },
    memory:{
        cardSlot: "No",
        internal: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM"
    },
    mainCamera:{
        dual:{
            1: "50 MP, f/1.9, 24mm (wide), 1/1.56\", 1.0µm, PDAF, OIS",
            2: "50 MP, f/2.2, 114˚ (ultrawide), 1/2.76\", 0.64µm, AF"
        },
        features: "LED flash, panorama, HDR",
        video: "4K@30fps, 1080p@30/60fps, gyro-EIS, live HDR"
    },
    selfieCamera:{
        single: " 	16 MP, f/2.5, (wide), 1/3.1\", 1.0µm",
        features: "",
        video: "1080p@30fps"
    },
    sound:{
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "No",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band",
        bluetooth: "5.2, A2DP, LE",
        positioning: "GPS (L1), GLONASS (L1), BDS (B1I+B1c), GALILEO (E1), QZSS (L1)",
        nfc: "Yes",
        radio: "No",
        usb: "USB Type-C 2.0, OTG"
    },
    features:{
        sensors: "Fingerprint (under display, optical), accelerometer, proximity, gyro, compass"
    },
    battery:{
        type: "Li-Ion 4500 mAh, non-removable (17.42 Wh)",
        charging: "33W wired, 15W wireless, 5W reverse wireless"
    }
  },
  Pong:{
    name: "Nothing Phone (2)",
    maintainer: "Noah Anleitner (N0m4n904)",
    cameraType: "dual",
    image: Pong,
    launch: "2023",
    isBootImageNeeded: true,
    isVendorBootImageNeeded: true,
    isRecoveryImageNeeded: true,
    display:{
        type: "LTPO OLED, 1B colors, 120Hz, HDR10+, 1600 nits (HBM), 1600 nits (peak)",
        size: "6.7\"",
        resolution: "1080 x 2412 pixels"
    },
    platform:{
        chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
        cpu: "Octa-core (1x3.0 GHz Cortex-X2 & 3x2.5 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510)",
        gpu: "Adreno 730"
    },
    memory:{
        cardSlot: "No",
        internal: "128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM"
    },
    mainCamera:{
        dual:{
            1: "50 MP, f/1.9, 24mm (wide), 1/1.56\", 1.0µm, PDAF, OIS",
            2: "50 MP, f/2.2, 114˚ (ultrawide), 1/2.76\", 0.64µm, AF"
        },
        features: "LED flash, panorama, HDR",
        video: "4K@30/60fps, 1080p@30/60fps, gyro-EIS, live HDR, OIS"
    },
    selfieCamera:{
        single: "32 MP, f/2.5, (wide), 1/2.74\", 0.8µm",
        features: "HDR",
        video: "1080p@30fps"
    },
    sound:{
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "No",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        bluetooth: "5.3, A2DP, LE, aptX HD, aptX Adaptive",
        positioning: "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c), GALILEO (E1), QZSS (L1), NavIC",
        nfc: "Yes",
        radio: "No",
        usb: "USB Type-C 2.0, OTG"
    },
    features:{
        sensors: "Fingerprint (under display, optical), accelerometer, proximity, gyro, compass"
    },
    battery:{
        type: "Li-Ion 4700 mAh, non-removable",
        charging: "45W wired, 15W wireless, 5W reverse wireless"
    }
  },
  guacamole:{
    name: "OnePlus 7 Pro",
    maintainer: "Noah Anleitner (N0m4n904), Simao Gomes Viana (superboringdev)",
    cameraType: "triple",
    image: guacamole,
    launch: "2019",
    isBootImageNeeded: true,
    isVendorBootImageNeeded: false,
    isRecoveryImageNeeded: false,
    display:{
        type: "Fluid AMOLED, 90Hz, HDR10+",
        size: "6.67\"",
        resolution: "1440 x 3120 pixels"
    },
    platform:{
        chipset: "Qualcomm SM8150 Snapdragon 855",
        cpu: "Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)",
        gpu: "Adreno 640"
    },
    memory:{
        cardSlot: "No",
        internal: "128GB 6GB RAM, 256GB 8GB RAM, 256GB 12GB RAM"
    },
    mainCamera:{
        triple:{
            1: "48 MP, f/1.6, (wide), 1/2.0\", 0.8µm, PDAF, Laser AF, OIS",
            2: "8 MP, f/2.4, 78mm (telephoto), 3x optical zoom, PDAF, OIS",
            3: "16 MP, f/2.2, 17mm (ultrawide), AF"
        },
        features: "HDR, panorama, dual-LED flash",
        video: "4K@30/60fps, 1080p@30/60/240fps, 720p@480fps, Auto HDR, gyro-EIS, no video rec. with ultrawide camera"
    },
    selfieCamera:{
        single: "Motorized pop-up 16 MP, f/2.0, 25mm (wide), 1/3.06\", 1.0µm",
        features: "Auto-HDR",
        video: "1080p@30fps (gyro-EIS)"
    },
    sound:{
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "No",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, DLNA",
        bluetooth: "5.0, A2DP, LE, aptX HD",
        positioning: "GPS (L1+L5), GLONASS (G1), BDS (B1), GALILEO (E1+E5a)",
        nfc: "Yes",
        radio: "No",
        usb: "USB Type-C 3.1, OTG"
    },
    features:{
        sensors: "Fingerprint (under display, optical), accelerometer, gyro, compass, virtual proximity sensing"
    },
    battery:{
        type: "Li-Po 4000 mAh, non-removable",
        charging: "30W wired"
    }
},
cheeseburger:{
    name: "OnePlus 5",
    maintainer: "DISCONTINUED",
    cameraType: "dual",
    image: cheeseburger,
    launch: "2017",
    isBootImageNeeded: false,
    isVendorBootImageNeeded: false,
    isRecoveryImageNeeded: false,
    display:{
        type: "Optic AMOLED",
        size: "5.5\"",
        resolution: "1080 x 1920 pixels"
    },
    platform:{
        chipset: "Qualcomm MSM8998 Snapdragon 835",
        cpu: "Octa-core (4 x 2.45 GHz Kryo & 4 x 1.9 GHz Kryo)",
        gpu: "Adreno 540"
    },
    memory:{
        cardSlot: "No",
        internal: "64GB 6GB RAM, 128GB 8GB RAM"
    },
    mainCamera:{
        dual:{
            1: "16 MP, f/1.7, 24mm (wide), 1/2.8\", 1.12µm, PDAF",
            2: "20 MP, f/2.6, 36mm (standard), 1/2.8\", 1.0µm, 1.6x optical zoom, AF"
        },
        features: "HDR, panorama, dual-LED flash",
        video: "4K@30fps, 1080p@30/60fps, 720p@30/120/480fps, Auto-HDR"
    },
    selfieCamera:{
        single: "16MP, f/2.0, 20mm (wide), 1/3.06\", 1.0µm",
        features: "Auto-HDR",
        video: "1080p (gyro-EIS)"
    },
    sound:{
        loudspeaker: "Yes",
        headphoneJack: "Yes",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, DLNA",
        bluetooth: "5.0, A2DP, LE, aptX HD",
        positioning: "GPS, GLONASS, BDS, GALILEO",
        nfc: "Yes",
        radio: "No",
        usb: "USB Type-C 2.0"
    },
    features:{
        sensors: "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass"
    },
    battery:{
        type: "Li-Po 3300 mAh, non-removable",
        charging: "20W wired"
    }
},
a52q:{
    name: "Samsung Galaxy A52 4G",
    maintainer: "DISCONTINUED",
    cameraType: "quad",
    image: a52q,
    launch: "2021",
    isBootImageNeeded: false,
    isVendorBootImageNeeded: false,
    isRecoveryImageNeeded: false,
    display:{
        type: "Super AMOLED, 90Hz, 800 nits (HBM)",
        size: "6.5\"",
        resolution: "1080 x 2400 pixels"
    },
    platform:{
        chipset: "Qualcomm SM7125 Snapdragon 720G",
        cpu: "Octa-core (2x2.3 GHz Kryo 465 Gold & 6x1.8 GHz Kryo 465 Silver)",
        gpu: "Adreno 618"
    },
    memory:{
        cardSlot: "microSDXC (uses shared SIM slot)",
        internal: "128GB 4GB RAM, 128GB 6GB RAM, 128GB 8GB RAM, 256GB 6GB RAM, 256GB 8GB RAM"
    },
    mainCamera:{
        quad:{
            1: "64 MP, f/1.8, 26mm (wide), 1/1.7\", 0.8µm, PDAF, OIS",
            2: "12 MP, f/2.2, 123˚ (ultrawide), 1.12µm",
            3: "5 MP, f/2.4, (macro)",
            4: "5 MP, f/2.4, (depth)"
        },
        features: "LED flash, panorama, HDR",
        video: "4K@30fps, 1080p@30/60fps; gyro-EIS"
    },
    selfieCamera:{
        single: "32 MP, f/2.2, 26mm (wide), 1/2.8\", 0.8µm",
        features: "HDR",
        video: "4K@30fps, 1080p@30fps"
    },
    sound:{
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "Yes",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct",
        bluetooth: "5.0, A2DP, LE",
        positioning: "GPS, GLONASS, GALILEO, BDS",
        nfc: "Yes (market/region dependent)",
        radio: "FM radio",
        usb: "USB Type-C 2.0, OTG"
    },
    features:{
        sensors: "Fingerprint (under display, optical), accelerometer, gyro, compass, virtual proximity sensing"
    },
    battery:{
        type: "Li-Po 4500 mAh, non-removable",
        charging: "25W wired"
    }
},
rosemary:{
    name: "Xiaomi Redmi Note 10S",
    maintainer: "DISCONTINUED",
    cameraType: "quad",
    image: rosemary,
    launch: "2021",
    isBootImageNeeded: true,
    isVendorBootImageNeeded: false,
    isRecoveryImageNeeded: false,
    display:{
        type: "AMOLED",
        size: "6.43\"",
        resolution: "1080 x 2400 pixels"
    },
    platform:{
        chipset: "Mediatek Helio G95 (12nm)",
        cpu: "Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
        gpu: "Mali-G76 MC4"
    },
    memory:{
        cardSlot: "microSDXC (dedicated slot)",
        internal: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM, 128GB 8GB RAM"
    },
    mainCamera:{
        quad:{
            1: "64 MP, f/1.8, 26mm (wide), 1/1.97\", 0.7µm, PDAF",
            2: "8 MP, f/2.2, 118˚ (ultrawide), 1/4.0\", 1.12µm",
            3: "2 MP, f/2.4, (macro)",
            4: "2 MP, f/2.4, (depth)"
        },
        features: "LED flash, HDR, panorama",
        video: "4K@30fps, 1080p@30/60/120fps, 720p@960fps"
    },
    selfieCamera:{
        single: "13 MP, f/2.5, (wide), 1/3.06\", 1.12µm",
        features: "HDR",
        video: "1080p@30fps"
    },
    sound:{
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "Yes",
    },
    comms:{
        wlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct",
        bluetooth: "5.1, A2DP, LE",
        positioning: "GPS, GLONASS, GALILEO, BDS",
        nfc: "Yes (market/region dependent)",
        radio: "FM radio",
        usb: "USB Type-C 2.0"
    },
    features:{
        sensors: "Fingerprint (side-mounted), accelerometer, gyro, compass"
    },
    battery:{
        type: "Li-Po 5000 mAh, non-removable",
        charging: "33W wired"
    }
},
};
