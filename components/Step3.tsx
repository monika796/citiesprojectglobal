import { useForm } from 'react-hook-form'

type Step3Props = {
  onSubmit: (data: any) => void
  onPrevious: () => void
  paymentMethod?: 'card' | 'check'
  amount?: string | number
}

export default function Step3({ onSubmit, onPrevious, paymentMethod = 'card', amount }: Step3Props) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Your Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message as string}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message as string}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            id="postalCode"
            {...register('postalCode', { required: 'Postal code is required' })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message as string}</p>}
        </div>
      </div>

      {paymentMethod === 'check' ? (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Bank Information</h3>
          <div className="space-y-2">
            <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input
              id="bankName"
              {...register('bankName', { required: 'Bank name is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Bank Account Number</label>
            <input
              id="accountNumber"
              type="password"
              {...register('accountNumber', { required: 'Account number is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">Bank Routing Number</label>
            <input
              id="routingNumber"
              {...register('routingNumber', { required: 'Routing number is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.routingNumber && <p className="text-red-500 text-sm">{errors.routingNumber.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
            <select
              id="accountType"
              {...register('accountType', { required: 'Account type is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
            {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700">Account Holder</label>
            <select
              id="accountHolder"
              {...register('accountHolder', { required: 'Account holder type is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            {errors.accountHolder && <p className="text-red-500 text-sm">{errors.accountHolder.message as string}</p>}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Card Information</h3>
          <div className="space-y-2">
            <label htmlFor="cardInfo" className="block text-sm font-medium text-gray-700">Credit Card Information</label>
            <input
              id="cardInfo"
              {...register('cardInfo', { required: 'Credit card information is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.cardInfo && <p className="text-red-500 text-sm">{errors.cardInfo.message as string}</p>}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {`Donate $${amount || '0'}`}
        </button>
      </div>
    </form>
  )
}

