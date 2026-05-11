'use client';

import { useState } from 'react';

import { CareerApplyDialog } from '../CareersPositions/CareerApplyDialog';

export function GetInTouchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-white"
        onClick={() => setOpen(true)}
      >
        Get in Touch
      </button>

      <CareerApplyDialog open={open} onOpenChangeAction={setOpen} />
    </>
  );
}
