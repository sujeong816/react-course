import { useState } from "react"; /* 다양한 상태 등록 가능 */
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo (props) {  //props : 프로퍼티를 사용하여 ... 
    
    const [ModalIsOpen, setModalIsOpen] = useState(false); /* 초기상태는 닫아놓음, false */
    /* ModalIsOpen: True or False  / setModalIsOpen: 값 변경하는 함수  */

    function deleteHandler () {
        setModalIsOpen(true);
    }

    return (
        <div className="card">
          <h2>{props.text}</h2>  {/* props.text를 출력하고 props 객체의 text  프로퍼티에 저장된 값에 접근 가능 / 한줄만*/}
          <div className="actions">
            <button className="btn" onClick={deleteHandler} >Delete</button> {/* 만약 deleteHandler()면 클릭하지 않아도 delete가 실행됨 */}
          </div>
          { ModalIsOpen ? <Modal/> : null } {/* ModalIsOpen이 true이면(열려있으면) Model 실행 */}
          { ModalIsOpen && <Backdrop/> } {/* 위에랑 같은말 */}
        </div>
      );
}

export default Todo; //export로 내보내서 해당 함수가 파일 밖과 다른 파일에서 사용가능하게 함