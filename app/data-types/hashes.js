function calculateCRC16(buff, start, end) {
  var crc = new Uint16Array(1);
  var buffer = new Uint8Array(buff);
  crc[0] = 0;
  for (var i = start; i < end; i++) {
    crc[0] = (crc[0] >>> 8) | (crc[0] << 8) & 0xffff;
    crc[0] ^= (buffer[i] & 0xff);
    crc[0] ^= ((crc[0] & 0xff) >> 4);
    crc[0] ^= (crc[0] << 12) & 0xffff;
    crc[0] ^= ((crc[0] & 0xff) << 5) & 0xffff;
  }
  crc[0] &= 0xffff;
  return crc[0];
}

export { calculateCRC16 };
