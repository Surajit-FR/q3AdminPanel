const ConfirmationModal = ({ modalId, modalText, onDelete }) => {
    return (
        <>
            <div id={modalId} className="modal fade" tabIndex={-1} role="dialog"
                aria-hidden="true"
                >
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <div className="text-center">
                                <i className="ri-information-line h3 text-danger"></i>
                                <h5 className="mt-2">Heads up!</h5>
                                <p className="mt-3">{modalText}</p>
                                <button
                                    type="button"
                                    className="btn btn-info my-3"
                                    data-bs-dismiss="modal"
                                    onClick={onDelete}
                                >Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;