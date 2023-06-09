import { Address, ethereum } from "@graphprotocol/graph-ts";
import { ControllerEntity } from "../../generated/schema";
import { ControllerContract } from "../../generated/Controller/ControllerContract";
import { UNDEFINED } from "../utils/Constant";
import { loadOrCreateBookkeeper } from "./Bookkeeper";

export function loadOrCreateController(address: Address, block: ethereum.Block): ControllerEntity {
  const id = address.toHex()
  let controller = ControllerEntity.load(id)
  if (controller == null) {
    controller = new ControllerEntity(id);
    controller.oldAddress = Address.zero().toString();
    controller.VERSION = fetchControllerVersion(address)

    controller.bookkeeper = loadOrCreateBookkeeper(fetchBookkeeper(address), block).id

    controller.createAtBlock = block.number;
    controller.timestamp = block.timestamp;
    controller.save();
  }

  return controller;
}

export function fetchControllerVersion(address: Address): string {
  const tryVersion = ControllerContract.bind(address).try_VERSION();
  return tryVersion.reverted ? UNDEFINED : tryVersion.value;
}

export function fetchBookkeeper(address: Address): Address {
  const tryBookkeeper = ControllerContract.bind(address).try_bookkeeper()
  return tryBookkeeper.reverted ? Address.zero() : tryBookkeeper.value
}