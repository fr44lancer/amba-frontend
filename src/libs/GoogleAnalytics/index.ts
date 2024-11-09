import { lowerCaseStringAndRemoveSpaces } from '@/utils/helper';
import ControlParams = Gtag.ControlParams;
import EventParams = Gtag.EventParams;
import CustomParams = Gtag.CustomParams;
import GtagCommands = Gtag.GtagCommands;

import EventNames = Gtag.EventNames;

type GtagEventParamsType =
  | ControlParams
  | EventParams
  | CustomParams
  | undefined;

type EventNameType = EventNames | (string & {});

export const GA_TAG_MANAGER_ID = process.env.DOCUS_GOOGLE_TAG_MANAGER_ID || '';
export const GA_MEASUREMENT_ID = process.env.DOCUS_GOOGLE_MEASUREMENT_ID || '';

export class Analytics {
  private static GA_MEASUREMENT_ID: string = GA_MEASUREMENT_ID || '';
  private static USER_ID: string | undefined = undefined;
  private static USER_SUBSCRIPTION: string | undefined = undefined;

  /** Analytics initialization
   *
   */
  static init(): void {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_TAG_MANAGER_ID);
  }

  /** General function configured for sending events to GA
   *
   * @param payload
   * @private
   *
   */
  private static sendPayloadToGA(payload: GtagCommands['event']): void {
    if (!this.GA_MEASUREMENT_ID) {
      console.error('Google Analytics is not initialized. ');
      return;
    }

    if (typeof window === 'undefined') return;
    if (window && !window.gtag) this.init();

    let payloadData: any = {
      ...payload[1],
    };

    payloadData.user_id = this.USER_ID;

    window.gtag('event', payload[0], payloadData);
  }

  /** Add UserId to dataLayer
   *
   * @param userId
   * @param email
   *
   */
  static addUserIdToGADataLayer(userId: number | string, email: string): void {
    this.USER_ID = `${userId}`;
    window.dataLayer.push({
      user_id: userId,
      email: email,
    });
  }

  /** Add User Subscription to dataLayer
   *
   * @param user_subscription
   *
   */
  static addUserSubscriptionToGADataLayer(user_subscription: string): void {
    this.USER_SUBSCRIPTION = user_subscription;
    window.dataLayer.push({
      user_subscription,
    });
  }

  /** Track and send page view change event
   *
   * @param url
   *
   */
  static sendPageViewEventToGA(url: string): void {
    window.gtag('config', this.GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }

  /** Sign in (also Google sign in) button click
   *
   * @param userId
   * @param eventParams
   *
   */
  static sendLoginEventToGA(
    userId: string | undefined,
    eventParams?: GtagEventParamsType,
  ): void {
    this.USER_ID = userId;
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'User sign in',
      ...eventParams,
    };

    this.sendPayloadToGA(['login', { ...payload, user_id: userId }]);
  }

  /** Send Log out event
   *
   * @param eventParams
   *
   */
  static sendLogoutEventToGA(eventParams?: GtagEventParamsType): void {
    this.USER_ID = undefined;
    this.USER_SUBSCRIPTION = undefined;
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'User sign out',
      ...eventParams,
    };

    this.sendPayloadToGA(['logout', { ...payload, user_id: undefined }]);
  }

  /** Send sign up event while verifying email address
   *
   * @param eventParams
   *
   */
  static sendSignUpEventToGA(eventParams?: GtagEventParamsType): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'User sign up',
      ...eventParams,
    };

    this.sendPayloadToGA(['sign_up', payload]);
  }

  /** Click on Upgrade Plan Button
   *
   * @param eventParams
   *
   */
  static sendCheckoutBeginEventToGA(eventParams?: GtagEventParamsType): void {
    const payload: GtagEventParamsType = {
      event_category: 'ecommerce',
      event_label: 'Checkout begin',
      ...eventParams,
    };

    this.sendPayloadToGA(['begin_checkout', payload]);
  }

  /** Pricing cards button click
   *
   * @param eventParams
   *
   */
  static sendCheckoutProgressEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'ecommerce',
      event_label: 'Checkout progress',
      ...eventParams,
    };

    this.sendPayloadToGA(['checkout_progress', payload]);
  }

  /** Subscription plan change
   *
   * @param eventLabel
   * @param eventParams
   *
   */
  static sendSubscriptionPlanChangeEventToGA(
    eventLabel: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'ecommerce',
      event_label: `Subscription plan change to ${eventLabel}`,
      ...eventParams,
    };

    this.sendPayloadToGA(['purchase', payload]);
  }

  /** Generate report button click
   *
   * @param eventParams
   *
   */
  static sendGenerateReportEventToGA(eventParams?: GtagEventParamsType): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Generate report',
      ...eventParams,
    };

    this.sendPayloadToGA(['report_generate', payload]);
  }

  /** Validate report button click
   *
   * @param eventParams
   *
   */
  static sendValidateReportEventToGA(eventParams?: GtagEventParamsType): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Validate report',
      ...eventParams,
    };

    this.sendPayloadToGA(['report_validate', payload]);
  }

  /** Chat history list view
   *
   * @param eventParams
   *
   */
  static sendChatHistoryListViewEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'View Chat History list',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_history_list_view', payload]);
  }

  /** Chat history list item view (tab view)
   *
   * @param eventParams
   *
   */
  static sendChatHistoryListItemViewEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'View Chat History list item',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_history_item_view', payload]);
  }

  /** Health report list view
   *
   * @param eventParams
   *
   */
  static sendHealthReportListViewEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'View Health Report list',
      ...eventParams,
    };

    this.sendPayloadToGA(['reports_list_view', payload]);
  }

  /** Medical experts list view
   *
   * @param eventParams
   *
   */
  static sendMedicalExpertsListViewEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'View Medical experts list',
      ...eventParams,
    };

    this.sendPayloadToGA(['experts_list_view', payload]);
  }

  /** Medical experts list item view
   *
   * @param eventParams
   *
   */
  static sendMedicalExpertsListItemViewEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'View Medical experts list item',
      ...eventParams,
    };

    this.sendPayloadToGA(['expert_item_view', payload]);
  }

  /** Continue Last Chat
   *
   * @param eventParams
   *
   */
  static sendContinueLastChatEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Continue last chat',
      ...eventParams,
    };

    this.sendPayloadToGA(['continue_last_chat', payload]);
  }

  /** Continue Chat from Chat page
   *
   * @param eventParams
   *
   */
  static sendContinueLastChatCardClickEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Continue last chat Card click',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_page_continue_last_chat_card_click', payload]);
  }

  /** Chat page Personalized Chat Card click
   *
   * @param eventParams
   *
   */
  static sendPersonalizedCardClickEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Personalized Card click',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_page_personalized_card_click', payload]);
  }

  /** Chat page Temporary Chat Card click
   *
   * @param eventParams
   *
   */
  static sendUnpersonalizedCardClickEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Temporary Card click',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_page_unpersonalized_card_click', payload]);
  }

  /** Continue Chat from Chat history view page
   *
   * @param eventParams
   *
   */
  static sendChatHistoryViewContinueLastChatEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Continue last chat from Chat History View',
      ...eventParams,
    };

    this.sendPayloadToGA(['chat_history_view_continue_last_chat', payload]);
  }

  /** Sidebar Menu Item Click
   *
   * @param menuItemName
   * @param eventParams
   *
   */
  static sendSidebarMenuItemClickEventToGA(
    menuItemName: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Sidebar Menu Item Click - ${menuItemName}`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `sidebar_menu_item_click_${lowerCaseStringAndRemoveSpaces(menuItemName)}`,
      payload,
    ]);
  }

  /** Account dropdown Menu Item Click
   *
   * @param menuItemName
   * @param eventParams
   *
   */
  static sendAccountDropdownMenuItemClickEventToGA(
    menuItemName: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Account Dropdown Menu Item Click - ${menuItemName}`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `account_dropdown_menu_item_click_${lowerCaseStringAndRemoveSpaces(
        menuItemName,
      )}`,
      payload,
    ]);
  }

  /** Send account dropdown open/close state
   *
   * @param state
   * @param eventParams
   *
   */
  static sendAccountDropdownStateChangeEventToGA(
    state: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Account Dropdown State - ${state}`,
      ...eventParams,
    };

    this.sendPayloadToGA([`account_dropdown_${state}`, payload]);
  }

  /** Send modal open/close state
   *
   * @param eventName
   * @param eventLabel
   * @param eventParams
   *
   */
  static sendModalStateToGA(
    eventName: EventNameType,
    eventLabel: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: eventLabel,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `${lowerCaseStringAndRemoveSpaces(eventName)}`,
      payload,
    ]);
  }

  /** Send footer links click event
   *
   * @param eventName
   * @param eventLabel
   * @param eventParams
   *
   */
  static sendFooterLinkClickEventToGA(
    eventName: EventNameType,
    eventLabel: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: eventLabel,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `${lowerCaseStringAndRemoveSpaces(eventName)}`,
      payload,
    ]);
  }

  /*  ------------------------ Onboarding form start ------------------------ */

  /** Send Start Onboarding Flow event
   *
   * @param eventParams
   *
   */
  static sendStartOnboardingFlowEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Start onboarding flow event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`start_onboarding_flow`, payload]);
  }

  /** Send submit nickname form event
   *
   * @param eventParams
   *
   */
  static sendSubmitNicknameFormEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Onboarding flow submit nickname form event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`onboarding_flow_nickname_form_submit`, payload]);
  }

  /** Send submit primary goal form event
   *
   * @param eventParams
   *
   */
  static sendSubmitPrimaryGoalFormEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Onboarding flow submit primary goal form event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`onboarding_flow_primary_goal_form_submit`, payload]);
  }

  /** Send Onboarding Form current step view event
   *
   * @param currentStep
   * @param eventParams
   *
   */
  static sendOnboardingFormCurrentStepViewEventToGA(
    currentStep: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `View Onboarding Form ${currentStep} step`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `onboarding_form_${currentStep
        .toLowerCase()
        ?.replaceAll(' ', '_')}_step_view`,
      payload,
    ]);
  }

  /** Send Onboarding Form Submit event
   *
   * @param eventParams
   *
   */
  static sendOnboardingFormSubmitEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Onboarding Form submit`,
      ...eventParams,
    };

    this.sendPayloadToGA([`onboarding_form_submit`, payload]);
  }

  /*  ------------------------ Onboarding form end ------------------------ */

  /*  ------------------------ Edit Profile form start ------------------------ */

  /** Send Edit Profile Form current step view event
   *
   * @param currentStep
   * @param eventParams
   *
   */
  static sendEditProfileFormCurrentStepViewEventToGA(
    currentStep: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Edit Profile Form ${currentStep} step view`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `edit_profile_form_${currentStep
        .toLowerCase()
        ?.replaceAll(' ', '_')}_step_view`,
      payload,
    ]);
  }

  /** Send Edit Profile Form Submit event
   *
   * @param eventParams
   *
   */
  static sendEditProfileFormSubmitEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Edit Profile Form submit`,
      ...eventParams,
    };

    this.sendPayloadToGA([`edit_profile_form_submit`, payload]);
  }

  /*  ------------------------ Edit Profile form end ------------------------ */

  /** Send Logo click event
   *
   * @param pageName
   * @param eventParams
   *
   */
  static sendLogoClickEventToGA(
    pageName: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Logo click on ${pageName} page`,
      ...eventParams,
    };

    this.sendPayloadToGA([`logo_click_on_${pageName}_page`, payload]);
  }

  /** Send Forgot password button click event
   *
   * @param eventParams
   *
   */
  static sendForgotPasswordBtnClickEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'auth',
      event_label: `Forgot password button click`,
      ...eventParams,
    };

    this.sendPayloadToGA([`forgot_password_button_click`, payload]);
  }

  /** Redirect to sign in/up page button click event
   *
   * @param buttonName
   * @param eventParams
   *
   */
  static sendRedirectToSignInOrSignUpBtnClickEventToGA(
    buttonName: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'auth',
      event_label: `Redirect to ${buttonName} button click`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `redirect_to_${buttonName}_page_button_click`,
      payload,
    ]);
  }

  /** Send message sent event
   *
   * @param eventParams
   *
   */
  static sendMessageSentEventToGA(eventParams?: GtagEventParamsType): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Message sent event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`post_score`, payload]);
  }

  /** Send composer button click event
   *
   * @param eventParams
   *
   */
  static sendComposerButtonClickEventToGA(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Composer button click event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`composer_button_click_event`, payload]);
  }

  /** Send custom event to GA
   *
   * @param eventName
   * @param eventCategory
   * @param eventLabel
   * @param eventParams
   *
   */
  public static sendCustomEventToGA(
    eventName: string,
    eventCategory: string,
    eventLabel: string,
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: eventCategory,
      event_label: eventLabel,
      ...eventParams,
    };

    this.sendPayloadToGA([eventName, payload]);
  }

  /*  ----------- Events with user subscription type start ----------- */

  /** Generate report button click with user subscription
   *
   * @param eventParams
   *
   */
  static sendGenerateReportEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Generate report',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `report_generate_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Validate report button click with user subscription
   *
   * @param eventParams
   *
   */
  static sendValidateReportEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Validate report',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `report_validate_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Continue Last Chat with user subscription
   *
   * @param eventParams
   *
   */
  static sendContinueLastChatEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Continue last chat',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `continue_last_chat_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Continue Chat from Chat page with user subscription
   *
   * @param eventParams
   *
   */
  static sendContinueLastChatCardClickEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Continue last chat Card click',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `chat_page_continue_last_chat_card_click_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Chat page Personalized Chat Card click with user subscription
   *
   * @param eventParams
   *
   */
  static sendPersonalizedCardClickEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Personalized Card click',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `chat_page_personalized_card_click_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Chat page Temporary Chat Card click with user subscription
   *
   * @param eventParams
   *
   */
  static sendUnpersonalizedCardClickEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Chat page Temporary Card click',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `chat_page_unpersonalized_card_click_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Continue Chat from Chat history view page with user subscription
   *
   * @param eventParams
   *
   */
  static sendChatHistoryViewContinueLastChatEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Continue last chat from Chat History View',
      ...eventParams,
    };

    this.sendPayloadToGA([
      `chat_history_view_continue_last_chat_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Send message sent event with user subscription
   *
   * @param eventParams
   *
   */
  static sendMessageSentEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Message sent event`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `send_message_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  /** Send composer button click event with user subscription
   *
   * @param eventParams
   *
   */
  static sendComposerButtonClickEventToGAWithUserSubscription(
    eventParams?: GtagEventParamsType,
  ): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: `Composer button click event`,
      ...eventParams,
    };

    this.sendPayloadToGA([
      `composer_button_click_event_subscription_plan_${this.USER_SUBSCRIPTION}`,
      payload,
    ]);
  }

  static sendSubscriptionInitToGA(): void {
    const payload: GtagEventParamsType = {
      event_category: 'ecommerce',
      event_label: 'Checkout progress',
    };

    this.sendPayloadToGA(['docus_subscription_init_trigger', payload]);
  }

  static sendSubscriptionPurchaseToGA(): void {
    const payload: GtagEventParamsType = {
      event_category: 'ecommerce',
      event_label: 'Subscription Purchase',
    };

    this.sendPayloadToGA(['docus_subscription_purchase_trigger', payload]);
  }

  static sendTestAnalyzeToGA(): void {
    const payload: GtagEventParamsType = {
      event_category: 'engagement',
      event_label: 'Lab Test Analyze',
    };

    this.sendPayloadToGA(['test_analyze_trigger', payload]);
  }
}
