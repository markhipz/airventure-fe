import React from 'react'

function DurationFlightList() {
  return (
    <div className="flex flex-col space-y-6 text-center">
      <h4 className="text-sm font-semibold text-slate-400">17/3/2023</h4>
      <div className="flex flex-row">
        <ion-icon
          style={{ color: '#3898D3' }}
          size="small"
          name="radio-button-on-outline"
        ></ion-icon>
        <div className="flex w-full">
          <div
            style={{ borderDashArray: '5 10' }}
            className="my-auto w-full h-0 border border-dashed border-slate-400 relative"
          >
            <span className="absolute left-2/4 top-1 -translate-y-1/2 -translate-x-1/2">
              <ion-icon style={{ fontSize: '28px', color: '#3898D3' }} name="airplane"></ion-icon>
            </span>
          </div>
        </div>
        <ion-icon
          style={{ color: '#3898D3' }}
          size="small"
          name="radio-button-on-outline"
        ></ion-icon>
      </div>
      <h4 className="text-sm font-semibold text-slate-400">
        <span>Duration </span>
        <span className="text-primary">2h30m</span>
      </h4>
    </div>
  )
}

export default DurationFlightList
