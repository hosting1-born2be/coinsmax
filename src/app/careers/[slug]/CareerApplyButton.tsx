'use client';

import { useState } from 'react';

import { CareerApplyDialog } from '../components/CareersPositions/CareerApplyDialog';

import styles from './CareerPosition.module.scss';

export function CareerApplyButton({
  positionTitle,
}: {
  positionTitle: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`btn btn-white ${styles.career_position__apply_btn}`}
        onClick={() => setOpen(true)}
      >
        Apply Now
      </button>

      <CareerApplyDialog
        open={open}
        onOpenChangeAction={setOpen}
        positionTitle={positionTitle}
      />
    </>
  );
}
