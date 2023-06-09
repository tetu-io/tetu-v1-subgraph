import { Address, BigDecimal, BigInt, dataSource, log } from "@graphprotocol/graph-ts";

export const UNDEFINED = 'Undefined';
export const BD_TEN = BigDecimal.fromString('10');

export const BD_ONE_HUNDRED = BigDecimal.fromString('100')
export const SECONDS_OF_YEAR = BigDecimal.fromString('31557600');
export const YEAR_PERIOD = BigDecimal.fromString('365')
export const BD_ONE = BigDecimal.fromString('1')

export const BD_18 = BigDecimal.fromString('1000000000000000000');
export const BI_18 = BigInt.fromString('1000000000000000000');

export const STRATEGY_SPLITTER_PLATFORM = BigInt.fromI32(24);

export function getPriceCalculator(): Address {
  if (dataSource.network() == 'mainnet') {
    return Address.fromString("0x3E75231c1cc0E6D30d03346B3B87B92Bb3a1F856");
  } else if (dataSource.network() == 'matic') {
    return Address.fromString("0x0B62ad43837A69Ad60289EEea7C6e907e759F6E8");
  }
  log.warning("NO PRICE CALCULATOR ON NETWORK {}", [dataSource.network()]);
  return Address.zero()
}

export function getTetuToken(): Address {
  if (dataSource.network() == 'mainnet') {
    return Address.fromString('0x4f851750a3e6f80f1E1f89C67B56960Bfc29A934')
  } else if (dataSource.network() == 'matic') {
    return Address.fromString('0x255707B70BF90aa112006E1b07B9AeA6De021424')
  }
  log.warning("NO TETU TOKEN ON NETWORK {}", [dataSource.network()]);
  return Address.zero()
}

export function getUtilsHelper(): Address {
  if (dataSource.network() == 'mainnet') {
    return Address.fromString('0xa281C7B40A9634BCD16B4aAbFcCE84c8F63Aedd0')
  }
  return Address.fromString('0xdfB765935D7f4e38641457c431F89d20Db571674')
}

export function getContractReader(): Address {
  if (dataSource.network() == 'mainnet') {
    return Address.fromString('0x6E4D8CAc827B52E7E67Ae8f68531fafa36eaEf0B');
  }
  return Address.fromString('0xCa9C8Fba773caafe19E6140eC0A7a54d996030Da');
}