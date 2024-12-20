import { FC } from "react";

export type TContact = {
  fullName: string,
  email: string,
  location: string,
  position: string,
  image: string,
  alt: string;
  phone?: string;
}

type TProps = {
  contact: TContact;
  className?: string;
}

const CompanyContact:FC<TProps> = ({ contact, className }) => {
  return (
    <div className={className}>
      <div className="flex mb-2 yw-h4">
        <p className="leading-tight">{contact.location}</p>
      </div>
      <div className="mb-2 yw-t1">
        {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
        {contact.email && (
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        )}
      </div>
      <div className="flex mb-4">
        <img
          src={contact.image}
          alt={contact.fullName}
          width="48"
          height="48"
          className="ltr:mr-4 rtl:ml-4 rounded-full w-12 h-12 flex-shrink-0"
          loading="lazy"
        />
        <div>
          <div className="yw-t2-bold">{contact.fullName}</div>
          <div className="yw-t2-med">{contact.position}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyContact;
