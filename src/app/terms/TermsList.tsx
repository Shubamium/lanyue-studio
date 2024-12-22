"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import useMeasure from "react-use-measure";

type Props = {};

export default function TermsList({}: Props) {
  return (
    <div className="list">
      <TermsDropdown title={"Content Guidelines"}>
        <p>
          <strong>Accepted:</strong> Original designs, feminine, masculine, and
          androgynous characters, young to mature-looking characters,
          kemonomimis, and human-faced anthros.
        </p>
        <p>
          <strong>Not Accepted:</strong> Canon characters from copyrighted media
          (with exceptions), elderly, ferals, muzzled anthros, excessive
          violence & gore, NSFW content (especially the sexualization of
          minors), and offensive themes related to sex, race, and religion.
        </p>
      </TermsDropdown>
      <TermsDropdown title={"Usage"}>
        <p>
          You <strong>may not</strong> use any part of your commission for NFTs,
          cryptocurrency, or AI-generated derivative works. We strictly prohibit
          using our work to be for pornographic content, hate speech, or
          discrimination.
        </p>
      </TermsDropdown>
      <TermsDropdown title={"Copyright Policies"}>
        <p>
          <strong>Commercial Rights:</strong> The studio’s artist retains all
          commercial rights to the final work unless purchased separately, with
          the exception of Live2D model art and rigging which comes with a
          streaming license.
        </p>
        <ul>
          <li>
            <strong>Streaming License:</strong> 1.5-2x the full commission price
            <br />
            You may use the product to create content streaming platforms such
            as Twitch, YouTube, Bilibili, etc.
          </li>
          <li>
            <strong>Merchandising License: </strong> 2.5-3x the full commission
            price <br />
            You may use the product to create physical and digital merchandise.
          </li>
        </ul>
        <p>
          <strong>Sharing WIPs:</strong> Sharing work-in-progress (WIP)
          materials requires explicit authorization from the studio’s artist.
        </p>
        <p>
          <strong> Crediting the Artist:</strong> Credit the studio’s artist
          when using the commissioned work on social media or streaming
          platforms.
        </p>
      </TermsDropdown>

      <TermsDropdown title={"Termination and Refunds"}>
        <p>
          Both Lan’Yue Studio and the client can terminate the agreement with
          written notice. Refunds will be handled based on the project's
          completion stage. Refunds may be refused in case of clear violations
          of our Terms of Service.
        </p>
        <ul>
          <li>
            <u>Deposit:</u> non-refundable 10% fee for non-Live2D projects; 20%
            fee for Live2D projects.
          </li>
          <li>
            <u>Consulting & Sketch Stage:</u> may refund up to 60%
          </li>
          <li>
            <u>Line Art & Flat Color Stage:</u> may refund up to 30%
          </li>
          <li>
            <u>Rendering:</u> non-refundable
          </li>
        </ul>
      </TermsDropdown>

      <TermsDropdown title={"Revisions"}>
        <p>
          You'll receive three or more rounds of minor revisions for each
          service. Major revisions will require an additional fee.
        </p>
        <p>
          Requesting more revisions and edits will incur additional fees and
          potentially alter the delivery timeline.
        </p>
      </TermsDropdown>
      <TermsDropdown title={"Basic Rules"}>
        <p>
          Violation of these Terms of Services may result in blacklisting and
          potential legal repercussions depending on the severity.
        </p>
        <p>
          Chargebacks are strictly prohibited. If the studio cannot complete or
          deliver your project as planned, you will receive a full refund.
        </p>
        <ul>
          <li>
            In case of chargebacks or extortion, we may publish the offender's
            relevant information (excluding personal details) as evidence.
          </li>
        </ul>
        <p>Harassment of our artists and staff will not be tolerated.</p>
        <p>
          Projects commence only after payment is confirmed and received.
          Payment methods include PayPal invoices, bank transfers, and other
          platforms like Stripe.
        </p>
        <p>
          Once an invoice is officially issued, payment must be completed within
          3 days.
        </p>
        <ul>
          <li>
            Failure to pay an invoice within 7 days may result in immediate
            project termination and you forfeit all rights to the work.
          </li>
        </ul>

        <p>
          Lan’Yue Studio is committed to providing high-quality services and
          respecting the agreed-upon terms. We are not responsible for requests
          or expectations not explicitly stated in the service contract.
        </p>
        <p>
          Lan’Yue Studio is not responsible for delays or alterations in service
          caused by unforeseen circumstances, such as artist unavailability,
          natural disasters, or third-party service interruptions. We are also
          not liable for indirect or consequential losses resulting from the use
          of our services. While we strive for excellence, the final result of
          the work also depends on your active participation and approval.
        </p>
        <p>
          Lan’Yue Studio may modify these Terms of Service at any time. Changes
          will be made with due diligence and communicated transparently.
        </p>
        <p>
          We encourage amicable resolution of disputes through communication
          with managers. Any false or defamatory disclosures about Lan’Yue
          Studio may result in legal action.
        </p>
        <p>
          These Terms of Service are governed by the laws of the United States
          of America. Any legal action will be conducted exclusively in the
          court of Connecticut, U.S.
        </p>
      </TermsDropdown>
    </div>
  );
}

type props = {
  children: React.ReactNode;
  title: string;
};
export function TermsDropdown({ children, title }: props) {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={`terms ${visible ? "visible" : "closed"}`}
      onClick={() => {
        setVisible((visible) => !visible);
      }}
    >
      <div className="top-part">
        <h2>{title}</h2>
        <IoMdArrowDropdown />
      </div>
      <div className="content">
        {/* <Children/> */}
        {children}
      </div>
    </div>
  );
}
