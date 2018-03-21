"""Parse KSAS HTML to each rice field gps."""
# coding: utf-8

import sys
import re
from logging import getLogger, StreamHandler, NullHandler, DEBUG
logger = getLogger(__name__)
# handler = StreamHandler()
handler = NullHandler()
handler.setLevel(DEBUG)
logger.setLevel(DEBUG)
logger.addHandler(handler)
logger.propagate = False

riceFields = []

args = sys.argv
with open(args[1], 'r') as f:
    for row in f:
        pattern = r'{"id":"(\d+)","field_block_id":"(\d+)",.*?,'\
                  r'"center_latlng_str":"([\d\.]+)#([\d\.]+)",.*?'\
                  r'"region_latlng_str":"([\d\.\#]+)",.*?"field_name":"(.*?)"'
        mAll = re.findall(pattern, row)
        for m in mAll:
            field = {}
            logger.debug("\n\n\n[Match] -> " + m[0])
            logger.debug(m[0])
            field["id"] = m[0]
            logger.debug(m[1])
            field["field_block_id"] = m[1]
            logger.debug(m[2])
            logger.debug(m[3])
            center_latlng = {"lat": m[2], "lng": m[3]}
            field["center_latlng_str"] = center_latlng
            logger.debug(m[4])
            field["region_latlng_str"] = []
            region_latlng_array = m[4].split("#")
            assert len(region_latlng_array) % 2 == 0
            for i in range(0, len(region_latlng_array), 2):
                field["region_latlng_str"].append(
                    {"lat": region_latlng_array[i],
                        "lng": region_latlng_array[i + 1]})
                logger.debug("lat: " + region_latlng_array[i] +
                             "lng: " + region_latlng_array[i + 1])
            field["field_name"] = m[5]
            riceFields.append(field)

print(str(riceFields).replace("'", "").replace("}, {lat", "},\n{lat").replace("}, {id", "},\n\n{id"))
