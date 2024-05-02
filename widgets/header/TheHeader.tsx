import React, { useEffect } from "react";

import Link from "next/link";

import "./TheHeader.css";
import { Observer, observer } from "mobx-react-lite";
import { mobileStore } from "@/store/MobileStore";
import { isMobileDevice } from "@/utils/generalFunctions";
import MobileHeaderContent from "@/widgets/mobileHeaderContent/MobileHeaderContent";

const TheHeader = observer(() => {
  useEffect(() => {
    if (isMobileDevice()) {
      mobileStore.changeIsMobileDeviceStatus(true);
    }
  }, []);
  return (
    <Observer>
      {() => (
        <>
          {mobileStore.isMobileDevice ? (
            <MobileHeaderContent />
          ) : (
            <header>
              <Link href="/" className="headerLogoLink">
                <img
                  src="/static/GeneralIcons/SkullIcon.svg"
                  alt=""
                  className="headerLogoLink_Icon"
                />

                <p className="headerLogoLink_Text">
                  HELLDIVERS <b className="headerLogoLink_Text_Bold">help</b>
                </p>
              </Link>

              <nav className="headerNavBlock">
                <Link href="/code" className="headerNavBlock_Link">
                  КОДЕКС
                </Link>

                <Link href="/war" className="headerNavBlock_Link">
                  ВОЙНА
                </Link>

                <Link
                  href="/stratagemTraining"
                  className="headerNavBlock_Link col-span-2"
                >
                  ТРЕНИРОВКА СТРАТАГЕМ
                </Link>
              </nav>
            </header>
          )}
        </>
      )}
    </Observer>
  );
});

export default TheHeader;
