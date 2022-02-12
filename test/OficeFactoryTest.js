const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Office Factory", function () {
  it("Should return owner token", async function () {
    const {owner} = await ethers.getSigners();
    const OfficeFactory = await ethers.getContractFactory("OfficeFactory");
    const officeFactory = await OfficeFactory.deploy(_feeToSetter = '0xCD54C4829F27e1D15E1b977383EB2570205AaD79');
    await officeFactory.deployed();
    const owneraddress = await officeFactory.allPairsLength();
    console.log(owneraddress);
    expect(owneraddress);
  });
});
