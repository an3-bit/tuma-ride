export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendance_logs: {
        Row: {
          attendance_date: string
          created_at: string | null
          id: string
          is_present: boolean
          reason_for_absence: string | null
          school_id: string
          student_id: string
        }
        Insert: {
          attendance_date: string
          created_at?: string | null
          id?: string
          is_present: boolean
          reason_for_absence?: string | null
          school_id: string
          student_id: string
        }
        Update: {
          attendance_date?: string
          created_at?: string | null
          id?: string
          is_present?: boolean
          reason_for_absence?: string | null
          school_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_logs_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_logs_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          budget: number | null
          campaign_type: Database["public"]["Enums"]["campaign_type"]
          created_at: string | null
          created_by: string | null
          end_date: string | null
          id: string
          message_content: string | null
          metrics: Json | null
          name: string
          start_date: string | null
          status: string | null
          target_audience: string | null
          updated_at: string | null
        }
        Insert: {
          budget?: number | null
          campaign_type: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: string
          message_content?: string | null
          metrics?: Json | null
          name: string
          start_date?: string | null
          status?: string | null
          target_audience?: string | null
          updated_at?: string | null
        }
        Update: {
          budget?: number | null
          campaign_type?: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: string
          message_content?: string | null
          metrics?: Json | null
          name?: string
          start_date?: string | null
          status?: string | null
          target_audience?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      delivery_logs: {
        Row: {
          created_at: string | null
          delivery_id: string
          id: string
          log_entry: string
          log_type: string | null
          logged_by: string | null
        }
        Insert: {
          created_at?: string | null
          delivery_id: string
          id?: string
          log_entry: string
          log_type?: string | null
          logged_by?: string | null
        }
        Update: {
          created_at?: string | null
          delivery_id?: string
          id?: string
          log_entry?: string
          log_type?: string | null
          logged_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_logs_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "kit_deliveries"
            referencedColumns: ["id"]
          },
        ]
      }
      donation_requests: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          description: string | null
          id: string
          processed_at: string | null
          purpose: string
          requested_amount: number
          requested_by: string
          school_id: string
          status: string | null
          students_affected: number
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          processed_at?: string | null
          purpose: string
          requested_amount: number
          requested_by: string
          school_id: string
          status?: string | null
          students_affected: number
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          processed_at?: string | null
          purpose?: string
          requested_amount?: number
          requested_by?: string
          school_id?: string
          status?: string | null
          students_affected?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donation_requests_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          donor_email: string | null
          donor_name: string | null
          donor_phone: string | null
          id: string
          is_recurring: boolean | null
          message: string | null
          payment_method: string | null
          status: string | null
          transaction_reference: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          donor_email?: string | null
          donor_name?: string | null
          donor_phone?: string | null
          id?: string
          is_recurring?: boolean | null
          message?: string | null
          payment_method?: string | null
          status?: string | null
          transaction_reference?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          donor_email?: string | null
          donor_name?: string | null
          donor_phone?: string | null
          id?: string
          is_recurring?: boolean | null
          message?: string | null
          payment_method?: string | null
          status?: string | null
          transaction_reference?: string | null
        }
        Relationships: []
      }
      kit_deliveries: {
        Row: {
          created_at: string | null
          delivered_by: string | null
          delivery_date: string
          delivery_notes: string | null
          delivery_status: Database["public"]["Enums"]["delivery_status"] | null
          grade_level: string | null
          id: string
          kits_delivered: number
          received_by: string | null
          school_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          delivered_by?: string | null
          delivery_date: string
          delivery_notes?: string | null
          delivery_status?:
            | Database["public"]["Enums"]["delivery_status"]
            | null
          grade_level?: string | null
          id?: string
          kits_delivered: number
          received_by?: string | null
          school_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          delivered_by?: string | null
          delivery_date?: string
          delivery_notes?: string | null
          delivery_status?:
            | Database["public"]["Enums"]["delivery_status"]
            | null
          grade_level?: string | null
          id?: string
          kits_delivered?: number
          received_by?: string | null
          school_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kit_deliveries_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"] | null
          school_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"] | null
          school_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"] | null
          school_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      schools: {
        Row: {
          additional_info: string | null
          address: string
          contact_email: string
          contact_person_name: string
          contact_person_position: string
          contact_phone: string
          county: string
          created_at: string | null
          female_students: number | null
          id: string
          is_approved: boolean | null
          name: string
          registration_number: string
          school_type: string
          sub_county: string
          total_students: number | null
          updated_at: string | null
        }
        Insert: {
          additional_info?: string | null
          address: string
          contact_email: string
          contact_person_name: string
          contact_person_position: string
          contact_phone: string
          county: string
          created_at?: string | null
          female_students?: number | null
          id?: string
          is_approved?: boolean | null
          name: string
          registration_number: string
          school_type: string
          sub_county: string
          total_students?: number | null
          updated_at?: string | null
        }
        Update: {
          additional_info?: string | null
          address?: string
          contact_email?: string
          contact_person_name?: string
          contact_person_position?: string
          contact_phone?: string
          county?: string
          created_at?: string | null
          female_students?: number | null
          id?: string
          is_approved?: boolean | null
          name?: string
          registration_number?: string
          school_type?: string
          sub_county?: string
          total_students?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      session_bookings: {
        Row: {
          admin_notes: string | null
          age: number | null
          created_at: string
          email: string
          id: string
          location: string | null
          message: string | null
          name: string
          phone: string
          preferred_date: string
          preferred_time: string
          scheduled_date: string | null
          scheduled_location: string | null
          scheduled_time: string | null
          service: string
          session_type: string
          status: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          age?: number | null
          created_at?: string
          email: string
          id?: string
          location?: string | null
          message?: string | null
          name: string
          phone: string
          preferred_date: string
          preferred_time: string
          scheduled_date?: string | null
          scheduled_location?: string | null
          scheduled_time?: string | null
          service: string
          session_type: string
          status?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          age?: number | null
          created_at?: string
          email?: string
          id?: string
          location?: string | null
          message?: string | null
          name?: string
          phone?: string
          preferred_date?: string
          preferred_time?: string
          scheduled_date?: string | null
          scheduled_location?: string | null
          scheduled_time?: string | null
          service?: string
          session_type?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          age: number | null
          created_at: string | null
          full_name: string
          grade: string
          guardian_contact: string | null
          id: string
          school_id: string
          student_number: string
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          full_name: string
          grade: string
          guardian_contact?: string | null
          id?: string
          school_id: string
          student_number: string
        }
        Update: {
          age?: number | null
          created_at?: string | null
          full_name?: string
          grade?: string
          guardian_contact?: string | null
          id?: string
          school_id?: string
          student_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_trial_school: {
        Args: {
          school_name: string
          school_type: string
          county: string
          sub_county: string
          address: string
          admin_name: string
          admin_email: string
          admin_phone: string
          student_count_info: string
          total_students: number
        }
        Returns: string
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      campaign_type: "mpesa" | "sms" | "email"
      delivery_status: "pending" | "in_transit" | "delivered" | "cancelled"
      user_role: "admin" | "school_admin" | "volunteer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      campaign_type: ["mpesa", "sms", "email"],
      delivery_status: ["pending", "in_transit", "delivered", "cancelled"],
      user_role: ["admin", "school_admin", "volunteer"],
    },
  },
} as const
