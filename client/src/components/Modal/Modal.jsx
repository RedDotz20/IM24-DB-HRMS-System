import React from "react";
import InsertData from "../InsertForm/InsertData";
import DeleteModal from "../DeleteModal/DeleteModal.";
import UpdateData from "../UpdateForm/UpdateData";

export default function Modal(refreshState) {
	//* Open/Close Modal onChange event
	const [insertModal, setInsertModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);

	//* Temporary State
	const [deleteId, setDeleteId] = useState(0);
	const [updateId, setUpdateId] = useState(0);

	return (
		<>
			{insertModal && (
				<InsertData
					refreshState={refreshState}
					setInsertModal={setInsertModal}
				/>
			)}

			{deleteModal && (
				<DeleteModal
					id={deleteId}
					refreshState={refreshState}
					setDeleteModal={setDeleteModal}
				/>
			)}

			{updateModal && (
				<UpdateData
					id={updateId}
					refreshState={refreshState}
					setUpdateModal={setUpdateModal}
				/>
			)}
		</>
	);
}
