export type MemberStatus = 'active' | 'inactive' | 'expired' | 'pending'

export interface Member {
  id: string
  fullName: string
  email: string
  phone: string
  joinedDate: string
  status: MemberStatus
  membershipPlanId?: string
  expiryDate?: string
  createdAt: string
  updatedAt: string
}

export interface MembershipPlan {
  id: string
  name: string
  durationDays: number
  price: number
  description?: string
  isActive: boolean
}

export interface AttendanceRecord {
  id: string
  memberId: string
  checkInTime: string
  checkOutTime?: string
  date: string
}

export interface PaymentRecord {
  id: string
  memberId: string
  membershipPlanId: string
  amount: number
  paymentDate: string
  paymentMethod: 'cash' | 'card' | 'upi' | 'bank_transfer'
  status: 'paid' | 'pending' | 'failed'
  notes?: string
}
