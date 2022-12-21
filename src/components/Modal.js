function Modal (props) {
    /* 오버레이를 렌더링 */
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt">Cancel</button>
            <button className="btn">Confirm</button>
        </div>

    );
}

export default Modal;