import React,{Fragment} from 'react'

const UserCard = (props) => {
  console.log(props.datas)
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="rounded-xl bg-white shadow-md">
          <div className="float-left mr-4 mt-10 ml-5 flex justify-center">
            <img
              src={props.datas.picture.large}
              className="w-20 rounded-full"
              alt="Avatar"
            />
          </div>
          <div className="float-right m-6">
            <p className="text-4xl font-bold text-red-600 underline">
            
            </p>
            <p className="mr-5 mt-2 whitespace-pre-line text-sm">
            {props.datas.location.street.number} {props.datas.location.street.number}, Espirito Santo,<b>{props.datas.location.city},</b>{props.datas.location.postcode} {props.datas.location.timezone.offset}
            </p>
              <span>{props.datas.location.timezone.description}</span>
              <p className="text-gray-300">{props.datas.gender}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserCard