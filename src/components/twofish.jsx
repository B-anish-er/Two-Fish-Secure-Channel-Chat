import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { twofish } from "twofish";

export default function Twofish() {
  debugger;
  var IV = [
      0xb4, 0x6a, 0x02, 0x60, 0xb0, 0xbc, 0x49, 0x22, 0xb5, 0xeb, 0x07, 0x85,
      0xa4, 0xb7, 0xcc, 0x9e,
    ],
    twF = twofish(IV),
    key = "ABCDABCDABCDABCD",
    keyByteArray = twF.stringToByteArray(key);
  // useEffect(() => {

  //   return () => {
  //   }
  // }, [])

  const [pt, setPt] = useState("");
  const [ct, setCt] = useState("");
  const [dt, setDt] = useState("");
  // const [keyByteArray, setKeyByteArray] = useState(twF.stringToByteArray(key))

  return (
    <Container
      style={{
        // border: "1px solid red",
        minHeight: "100vh",
      }}
      className="d-flex align-items-center"
    >
      <div
        style={{
          minWidth: "50%",
          padding: "10%",
        }}
        className="m-auto"
      >
        <h1 className="text-center mb-4">Two Fish Algorithm</h1>{" "}
        <input
          type="text"
          name="pt"
          id="pt"
          onChange={(e) => setPt(e.target.value)}
        />
        <button
          onClick={() => {
            var ptByteArray = twF.stringToByteArray(pt);
            setCt(twF.encryptCBC(keyByteArray, ptByteArray));
            setDt(twF.byteArrayToString(twF.decryptCBC(keyByteArray, ct)));
            console.log(
              "Plain Text: ",
              pt,
              "\nEncrypted Text: ",
              ct,
              "\n Decrypted Text: ",
              dt
            );
          }}
        >
          Encrypt
        </button>
        <p>Plain Text: {pt}</p>
        <p>Encrypted Text: {ct}</p>
        <p>Decrypted Text: {dt}</p>
      </div>
    </Container>
  );
}
