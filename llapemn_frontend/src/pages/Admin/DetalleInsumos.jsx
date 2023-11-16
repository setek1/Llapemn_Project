import React from "react";
import { useEffect, useState } from "react";
import { useHistorial, useInsumos } from "../../hooks";
import { useParams } from "react-router-dom";
import {
  TableHistoriall,
  Button,
  AddHistorial,
  InfHistorial,
  AddSalaHistorial,
} from "../../components/Admin";
import { ModalBasic, Loading } from "../../components/Common";

export function DetalleInsumos() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const { getHistorialByInsumo, historial, loading } = useHistorial();
  const { getInsumosById, insumos } = useInsumos();
  useEffect(() => {
    getHistorialByInsumo(id);
  }, [refetch]);

  useEffect(() => {
    getInsumosById(id);
  }, [refetch]);

  const addHistorial = (data) => {
    setTitleModal("Ingresar Insumo");
    setContentModal(
      <AddHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        history={insumos}
        operacion={"S"}
        params={id}
      />,
    );
    openCloseModal();
  };
  const RestarHistorial = (data) => {
    setTitleModal("Utilizar Insumo");
    setContentModal(
      <AddHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        history={insumos}
        operacion={"R"}
      />,
    );
    openCloseModal();
  };
  const MoverHistorial = () => {
    setTitleModal("Mover");
    setContentModal(
      <AddSalaHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        operacion={"C"}
        params={historial}
      />,
    );
    openCloseModal();
  };

  return (
    <>
      <InfHistorial params={id} onRefetch={onRefetch} />
      <div className="flex w-full flex-col">
        <Button btnTitle={"Agregar Insumo"} btnClick={addHistorial} />
        <Button btnTitle={"Utilizar Insumo"} btnClick={RestarHistorial} />
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <TableHistoriall historial={historial} />
      )}

      <ModalBasic
        isVisible={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
